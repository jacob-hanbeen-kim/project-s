const chai = require("chai");
const { solidity } = require("ethereum-waffle");
const { ethers } = require("hardhat");
chai.use(solidity);
chai.use(require("chai-datetime"));
const { expect } = chai;

const DECIMAL_CONVERSION = 10 ** 18;
const DAY_IN_SECONDS = 86400;

function CONVERT_COST_TO_STRING(x) {
  return (x / DECIMAL_CONVERSION).toString();
}

describe("Unidirectional payment contract from clientA to clientB", function () {
  let unicontract, clientA, clientB;

  beforeEach(async function () {
    [merchant, clientA, clientB] = await ethers.getSigners();
  });

  it("clientA should successfully send 1 ether to clientB - exact balance", async () => {
    const UniContract = await ethers.getContractFactory(
      "UniDirectionalPaymentChannel"
    );

    // clientA deploys the contract and supplies 1 ether
    unicontract = await UniContract.connect(clientA).deploy(clientB.address, {
      value: ethers.utils.parseEther("1"),
    });

    // clientA generates a signed message to send to clientB
    let sig = await unicontract
      .connect(clientA)
      .getHash(ethers.utils.parseEther("1"));
    let messageHashBytes = ethers.utils.arrayify(sig);
    let signedMessage = await clientA.signMessage(messageHashBytes);

    // clientB receives the signed message and the exact amount information from clientA (off-chain) and closes the contract (receives ether)
    await unicontract
      .connect(clientB)
      .close(ethers.utils.parseEther("1"), signedMessage);

    // correctly self-destruct after successful transaction
    expect(await ethers.provider.getCode(unicontract.address)).to.equal("0x");
  });

  it("clientA should successfully send 0.5 ether to clientB - more than enough balance sent on contract deployment", async () => {
    const UniContract = await ethers.getContractFactory(
      "UniDirectionalPaymentChannel"
    );
    unicontract = await UniContract.connect(clientA).deploy(clientB.address, {
      value: ethers.utils.parseEther("2"),
    });
    let sig = await unicontract
      .connect(clientA)
      .getHash(ethers.utils.parseEther("0.5"));
    let messageHashBytes = ethers.utils.arrayify(sig);
    let signedMessage = await clientA.signMessage(messageHashBytes);
    await unicontract
      .connect(clientB)
      .close(ethers.utils.parseEther("0.5"), signedMessage);

    // correctly self-destruct after successful transaction
    expect(await ethers.provider.getCode(unicontract.address)).to.equal("0x");
  });

  it("clientA should fail to send 1 ether to clientB - not enough balance sent on contract deployment", async () => {
    const UniContract = await ethers.getContractFactory(
      "UniDirectionalPaymentChannel"
    );
    unicontract = await UniContract.connect(clientA).deploy(clientB.address, {
      value: ethers.utils.parseEther("0.5"),
    });
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
    const UniContract = await ethers.getContractFactory(
      "UniDirectionalPaymentChannel"
    );
    unicontract = await UniContract.connect(clientA).deploy(clientB.address, {
      value: ethers.utils.parseEther("1"),
    });
    const contractCode = await ethers.provider.getCode(unicontract.address);
    await unicontract.connect(clientA).getHash(ethers.utils.parseEther("1"));

    // expect revert on request to cancel the contract
    await expect(unicontract.connect(clientA).cancel()).to.reverted;

    // TODO: check clientA's balance to be down 1 eth (remaining in the contract)
    // TODO: check clientB's balance to not change at all

    // check self-destruct not happening after failed transaction
    expect(await ethers.provider.getCode(unicontract.address)).to.equal(
      contractCode
    );
  });

  it("clientA should successfully cancel the contract", async () => {
    const UniContract = await ethers.getContractFactory(
      "UniDirectionalPaymentChannel"
    );
    unicontract = await UniContract.connect(clientA).deploy(clientB.address, {
      value: ethers.utils.parseEther("1"),
    });
    await unicontract.connect(clientA).getHash(ethers.utils.parseEther("1"));

    let block = await ethers.provider.getBlock();
    // increase block time by a week and a second, so the next payment date has come
    await ethers.provider.send("evm_mine", [
      block.timestamp + DAY_IN_SECONDS * 7 + 1,
    ]);

    // expect successful request to cancel the contract
    await unicontract.connect(clientA).cancel();

    // TODO: check clientA's balance to return to original (minus gas fee)
    // TODO: check clientB's balance to not change at all

    // correctly self-destruct after successful cancellation
    expect(await ethers.provider.getCode(unicontract.address)).to.equal("0x");
  });
});
