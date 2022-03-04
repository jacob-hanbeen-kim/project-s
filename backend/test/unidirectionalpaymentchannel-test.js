const chai = require("chai");
const { solidity } = require("ethereum-waffle");
const { ethers } = require("hardhat");
const { platform } = require("os");
const { features } = require("process");
chai.use(solidity);
chai.use(require("chai-datetime"));
const { expect } = chai;

const DECIMAL_CONVERSION = 10 ** 18;
const DAY_IN_SECONDS = 86400;
const COMMISSION_PERCENTAGE = 20;

function CONVERT_COST_TO_STRING(x) {
  return (x / DECIMAL_CONVERSION).toString();
}

describe("Unidirectional payment contract from clientA to clientB", function () {
  let unicontract, clientA, clientB;

  beforeEach(async function () {
    [_platform, clientA, clientB] = await ethers.getSigners();
  });

  it("clientA should successfully send 1 ether to clientB - exact balance", async () => {
    const prevBalanceClientB = await clientB.getBalance();
    const prevBalancePlatform = await _platform.getBalance();

    const UniContract = await ethers.getContractFactory(
      "UniDirectionalPaymentChannel"
    );

    // clientA deploys the contract and supplies 1 ether
    unicontract = await UniContract.connect(clientA).deploy(
      clientB.address,
      _platform.address,
      COMMISSION_PERCENTAGE,
      {
        value: ethers.utils.parseEther("1"),
      }
    );

    // clientA generates a signed message to send to clientB
    let sig = await unicontract
      .connect(clientA)
      .getHash(ethers.utils.parseEther("1"));
    let messageHashBytes = ethers.utils.arrayify(sig);
    let signedMessage = await clientA.signMessage(messageHashBytes);

    // clientB receives the signed message and the exact amount information from clientA (off-chain) and closes the contract (receives ether)
    const tx = await unicontract
      .connect(clientB)
      .close(ethers.utils.parseEther("1"), signedMessage);

    // calculate close call gas cost
    const receipt = await tx.wait();
    const totalGasCostForClose = receipt.effectiveGasPrice.mul(receipt.gasUsed);

    // check clientB's balance to have changed.
    expect(await clientB.getBalance()).to.equal(
      prevBalanceClientB
        .add(
          ethers.utils
            .parseEther("1")
            .mul(100 - COMMISSION_PERCENTAGE)
            .div(100)
        )
        .sub(totalGasCostForClose)
    );

    // check correct platform commission
    expect(await _platform.getBalance()).to.equal(
      prevBalancePlatform.add(
        ethers.utils.parseEther("1").mul(COMMISSION_PERCENTAGE).div(100)
      )
    );

    // correctly self-destruct after successful transaction
    expect(await ethers.provider.getCode(unicontract.address)).to.equal("0x");
  });

  it("clientA should successfully send 0.5 ether to clientB - more than enough balance sent on contract deployment", async () => {
    const prevBalancePlatform = await _platform.getBalance();

    const UniContract = await ethers.getContractFactory(
      "UniDirectionalPaymentChannel"
    );
    unicontract = await UniContract.connect(clientA).deploy(
      clientB.address,
      _platform.address,
      COMMISSION_PERCENTAGE,
      {
        value: ethers.utils.parseEther("2"),
      }
    );
    let sig = await unicontract
      .connect(clientA)
      .getHash(ethers.utils.parseEther("0.5"));
    let messageHashBytes = ethers.utils.arrayify(sig);
    let signedMessage = await clientA.signMessage(messageHashBytes);
    await unicontract
      .connect(clientB)
      .close(ethers.utils.parseEther("0.5"), signedMessage);

    // check correct platform commission
    expect(await _platform.getBalance()).to.equal(
      prevBalancePlatform.add(
        ethers.utils.parseEther("0.5").mul(COMMISSION_PERCENTAGE).div(100)
      )
    );

    // correctly self-destruct after successful transaction
    expect(await ethers.provider.getCode(unicontract.address)).to.equal("0x");
  });

  it("clientA should fail to send 1 ether to clientB - not enough balance sent on contract deployment", async () => {
    const UniContract = await ethers.getContractFactory(
      "UniDirectionalPaymentChannel"
    );
    unicontract = await UniContract.connect(clientA).deploy(
      clientB.address,
      _platform.address,
      COMMISSION_PERCENTAGE,
      {
        value: ethers.utils.parseEther("0.5"),
      }
    );
    const contractCode = await ethers.provider.getCode(unicontract.address);
    let sig = await unicontract
      .connect(clientA)
      .getHash(ethers.utils.parseEther("1"));
    let messageHashBytes = ethers.utils.arrayify(sig);

    // expect close function to revert.
    let signedMessage = await clientA.signMessage(messageHashBytes);
    await expect(
      unicontract
        .connect(clientB)
        .close(ethers.utils.parseEther("1"), signedMessage)
    ).to.reverted;

    // check self-destruct not happening after failed transaction
    expect(await ethers.provider.getCode(unicontract.address)).to.equal(
      contractCode
    );
  });

  it("clientA should fail to cancel the contract - contract live duration has not passed yet", async () => {
    const prevBalanceClientB = await clientB.getBalance();

    const UniContract = await ethers.getContractFactory(
      "UniDirectionalPaymentChannel"
    );

    unicontract = await UniContract.connect(clientA).deploy(
      clientB.address,
      _platform.address,
      COMMISSION_PERCENTAGE,
      {
        value: ethers.utils.parseEther("1"),
      }
    );

    const contractCode = await ethers.provider.getCode(unicontract.address);
    await unicontract.connect(clientA).getHash(ethers.utils.parseEther("1"));

    // expect revert on cancel call
    await expect(unicontract.connect(clientA).cancel()).to.be.reverted;

    // check clientB's balance to not change at all
    expect(await clientB.getBalance()).to.equal(prevBalanceClientB);

    // check self-destruct not happening after failed transaction
    expect(await ethers.provider.getCode(unicontract.address)).to.equal(
      contractCode
    );
  });

  it("clientA should successfully cancel the contract", async () => {
    const prevBalanceClientB = await clientB.getBalance();
    const prevBalanceClientA = await clientA.getBalance();

    const UniContract = await ethers.getContractFactory(
      "UniDirectionalPaymentChannel"
    );
    unicontract = await UniContract.connect(clientA).deploy(
      clientB.address,
      _platform.address,
      COMMISSION_PERCENTAGE,
      {
        value: ethers.utils.parseEther("1"),
      }
    );

    // calculate contract deployment gas cost
    const contractReceipt = await unicontract.deployTransaction.wait();
    const totalGasCostForContract = contractReceipt.effectiveGasPrice.mul(
      contractReceipt.gasUsed
    );

    // clientA gets the hash
    await unicontract.connect(clientA).getHash(ethers.utils.parseEther("1"));

    // increase block time by a week and a second, so the next payment date has arrived
    let block = await ethers.provider.getBlock();
    await ethers.provider.send("evm_mine", [
      block.timestamp + DAY_IN_SECONDS * 7 + 1,
    ]);

    // expect successful request to cancel the contract. Contract balance (1 ether) should have returned to clientA
    const tx = await unicontract.connect(clientA).cancel();

    // calculate cancel call gas cost
    const receipt = await tx.wait();
    const totalGasCostForCancel = receipt.effectiveGasPrice.mul(
      receipt.gasUsed
    );

    // check clientA's balance to still own the 1 ether. But transaction gas costs for deploying contract and cancelling would still be used.
    const afterBalanceClientA = await clientA.getBalance();
    const clientAFee = prevBalanceClientA
      .sub(totalGasCostForContract)
      .sub(totalGasCostForCancel);

    expect(afterBalanceClientA).to.equal(clientAFee);

    // check clientB's balance to not have changed.
    expect(await clientB.getBalance()).to.equal(prevBalanceClientB);

    // correctly self-destruct after successful cancellation
    expect(await ethers.provider.getCode(unicontract.address)).to.equal("0x");
  });
});