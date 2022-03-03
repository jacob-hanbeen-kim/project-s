const chai = require("chai");
const { solidity } = require("ethereum-waffle");
const { ethers } = require("hardhat");
chai.use(solidity);
chai.use(require("chai-datetime"));

const { expect } = chai;

const DECIMAL_CONVERSION = 10 ** 18;
const DELAY_TOLERANCE = 10; // 10 seconds delay tolerance for timestamp checking.
const MONTH = 1;
const DAY_IN_SECONDS = 86400;
// plans
const PLAN_NOT_APPLICABLE = -1; // no such plan exists. for testing purpose only.
const PLAN_BASIC = 0;
const PLAN_ELITE_MONTHLY = 1;
const PLAN_ELITE_YEARLY = 2;
const PLAN_VIP_MONTHLY = 3;
const PLAN_VIP_YEARLY = 4;

// plan costs
const PLAN_BASIC_COST = 0 * DECIMAL_CONVERSION;
const PLAN_ELITE_MONTHLY_COST = 0.0001 * DECIMAL_CONVERSION;
const PLAN_ELITE_YEARLY_COST = 0.001 * DECIMAL_CONVERSION;
const PLAN_VIP_MONTHLY_COST = 0.0005 * DECIMAL_CONVERSION;
const PLAN_VIP_YEARLY_COST = 0.005 * DECIMAL_CONVERSION;

function CONVERT_COST_TO_STRING(x) {
  return (x / DECIMAL_CONVERSION).toString();
}

describe("Subscription contract", function () {
  let subscription, merchant, subscriber;

  beforeEach(async function () {
    [merchant, subscriber] = await ethers.getSigners();
    const Subscription = await ethers.getContractFactory(
      "SubscriptionContract"
    );
    subscription = await Subscription.deploy();
  });

  it("should create a plan 1", async () => {
    // case 1
    const tx = await subscription
      .connect(merchant)
      .createPlan(PLAN_ELITE_MONTHLY, PLAN_ELITE_MONTHLY_COST, MONTH);
    const receipt = await tx.wait();
    const event = receipt.events[0];
    expect(event.args[0]).to.equal(merchant.address);
    expect(event.args[1]).to.equal(PLAN_ELITE_MONTHLY);
    expect(new Date(event.args[2] * 1000)).to.closeToTime(
      new Date(Date.now()),
      DELAY_TOLERANCE
    );
    const plan1 = await subscription.plans(PLAN_ELITE_MONTHLY);
    expect(plan1.planId).to.equal(PLAN_ELITE_MONTHLY);
    expect(plan1.cost).to.equal(PLAN_ELITE_MONTHLY_COST);
    expect(plan1.durationMonth).to.equal(MONTH);
  });

  it("should create a plan 2", async () => {
    // case 2
    const tx2 = await subscription.createPlan(
      PLAN_ELITE_YEARLY,
      PLAN_ELITE_YEARLY_COST,
      2 * MONTH
    );
    const receipt2 = await tx2.wait();
    const event2 = receipt2.events[0];
    expect(event2.args[0]).to.equal(merchant.address);
    expect(event2.args[1]).to.equal(PLAN_ELITE_YEARLY);
    expect(new Date(event2.args[2] * 1000)).to.closeToTime(
      new Date(Date.now()),
      DELAY_TOLERANCE
    );
    const plan2 = await subscription.plans(PLAN_ELITE_YEARLY);
    expect(plan2.planId).to.equal(PLAN_ELITE_YEARLY);
    expect(plan2.cost).to.equal(PLAN_ELITE_YEARLY_COST);
    expect(plan2.durationMonth).to.equal(2 * MONTH);
  });

  it("should create a plan 3", async () => {
    // case 3
    const tx3 = await subscription.createPlan(
      PLAN_BASIC,
      PLAN_BASIC_COST,
      2 * MONTH
    );
    const receipt3 = await tx3.wait();
    const event3 = receipt3.events[0];
    expect(event3.args[0]).to.equal(merchant.address);
    expect(event3.args[1]).to.equal(PLAN_BASIC);
    expect(new Date(event3.args[2] * 1000)).to.closeToTime(
      new Date(Date.now()),
      DELAY_TOLERANCE
    );
    const plan3 = await subscription.plans(PLAN_BASIC);
    expect(plan3.planId).to.equal(PLAN_BASIC);
    expect(plan3.cost).to.equal(0 * DECIMAL_CONVERSION);
    expect(plan3.durationMonth).to.equal(2 * MONTH);
  });

  it("should NOT create a plan 1", async () => {
    await expect(
      subscription.createPlan(
        PLAN_NOT_APPLICABLE,
        PLAN_ELITE_MONTHLY_COST,
        MONTH
      )
    ).to.be.reverted;
  });

  it("should NOT create a plan 2", async () => {
    await expect(
      subscription.createPlan(
        PLAN_ELITE_MONTHLY,
        PLAN_ELITE_MONTHLY_COST,
        0 * MONTH
      )
    ).to.be.reverted;
  });

  it("should NOT create a plan 3", async () => {
    await subscription.createPlan(
      PLAN_ELITE_MONTHLY,
      PLAN_ELITE_MONTHLY_COST,
      MONTH
    );
    await expect(
      subscription.createPlan(
        PLAN_ELITE_MONTHLY,
        PLAN_ELITE_MONTHLY_COST,
        MONTH
      )
    ).to.be.reverted;
  });

  it("should create a subscription", async () => {
    await subscription
      .connect(merchant)
      .createPlan(
        PLAN_ELITE_MONTHLY,
        ethers.utils.parseEther(
          CONVERT_COST_TO_STRING(PLAN_ELITE_MONTHLY_COST)
        ),
        MONTH
      );
    var previousBalance = await subscription.getBalance();
    await subscription.connect(subscriber).subscribeToPlan(PLAN_ELITE_MONTHLY, {
      value: ethers.utils.parseEther(
        CONVERT_COST_TO_STRING(PLAN_ELITE_MONTHLY_COST)
      ),
    });
    const blockNumber = await ethers.provider.getBlockNumber();
    const block = await ethers.provider.getBlock(blockNumber);
    const subscriptionStatus = await subscription.subscriptions(
      subscriber.address
    );
    expect(subscriptionStatus.subscriber).to.equal(subscriber.address);
    expect(
      new Date(subscriptionStatus.startTimeStamp * 1000)
    ).to.be.closeToTime(new Date(block.timestamp * 1000), DELAY_TOLERANCE);
    expect(subscriptionStatus.nextPaymentTimeStamp.toString()).to.equal(
      (block.timestamp + 86400 * 30).toString()
    );
    var afterBalance = await subscription.getBalance();
    expect(afterBalance).to.equal(
      previousBalance +
        ethers.utils.parseEther(CONVERT_COST_TO_STRING(PLAN_ELITE_MONTHLY_COST))
    );
  });

  it("should NOT create a subscription - no such plan exists yet", async () => {
    await expect(
      subscription.connect(subscriber).subscribeToPlan(PLAN_ELITE_MONTHLY)
    ).to.be.reverted;
  });

  it("should emit Received event - subscriber subscribed", async () => {
    await subscription
      .connect(merchant)
      .createPlan(PLAN_ELITE_MONTHLY, PLAN_ELITE_MONTHLY_COST, MONTH);

    await expect(
      await subscription
        .connect(subscriber)
        .subscribeToPlan(PLAN_ELITE_MONTHLY, {
          value: ethers.utils.parseEther(
            CONVERT_COST_TO_STRING(PLAN_ELITE_MONTHLY_COST)
          ),
        })
    )
      .to.emit(subscription, "Received")
      .withArgs(subscription.address, PLAN_ELITE_MONTHLY_COST);
  });

  it("should subscribe and pay", async () => {
    let prevBalanceMerchant,
      afterBalanceMerchant,
      prevBalanceSubscriber,
      afterBalanceSubscriber;
    await subscription
      .connect(merchant)
      .createPlan(PLAN_ELITE_MONTHLY, PLAN_ELITE_MONTHLY_COST, MONTH);

    prevBalanceSubscriber = await subscriber.getBalance();
    prevBalanceMerchant = await merchant.getBalance();

    const tx = await subscription
      .connect(subscriber)
      .subscribeToPlan(PLAN_ELITE_MONTHLY, {
        value: ethers.utils.parseEther(
          CONVERT_COST_TO_STRING(PLAN_ELITE_MONTHLY_COST)
        ),
      });
    const receipt = await tx.wait();
    // Total gas cost of a completed transaction = effective gas price * used gas
    const totalGasCostForThisTransaction = receipt.effectiveGasPrice.mul(
      receipt.gasUsed
    );

    afterBalanceMerchant = await merchant.getBalance();
    afterBalanceSubscriber = await subscriber.getBalance();

    expect(prevBalanceSubscriber).to.equal(
      afterBalanceSubscriber
        .add(PLAN_ELITE_MONTHLY_COST)
        .add(totalGasCostForThisTransaction)
    );

    // balance still within the contract.
    expect(prevBalanceMerchant).to.equal(afterBalanceMerchant);

    const balance = await subscription.getBalance();
    expect(balance).to.equal(PLAN_ELITE_MONTHLY_COST);

    const tx2 = await subscription.connect(merchant).withdraw(balance);
    const receipt2 = await tx2.wait();
    const totalGasCostForThisTransaction2 = receipt2.effectiveGasPrice.mul(
      receipt2.gasUsed
    );

    afterBalanceMerchant = await merchant.getBalance();
    expect(afterBalanceMerchant).to.equal(
      prevBalanceMerchant
        .add(PLAN_ELITE_MONTHLY_COST)
        .sub(totalGasCostForThisTransaction2)
    );
  });

  it("should renew subscription - payment is due", async () => {
    await subscription
      .connect(merchant)
      .createPlan(PLAN_ELITE_MONTHLY, PLAN_ELITE_MONTHLY_COST, MONTH);

    await subscription.connect(subscriber).subscribeToPlan(PLAN_ELITE_MONTHLY, {
      value: ethers.utils.parseEther(
        CONVERT_COST_TO_STRING(PLAN_ELITE_MONTHLY_COST)
      ),
    });

    let block = await ethers.provider.getBlock();

    // increase block time by a month and one sec, so the next payment date has come
    await ethers.provider.send("evm_mine", [
      block.timestamp + DAY_IN_SECONDS * 30 + 1,
    ]);

    await subscription.connect(subscriber).renewSubscription({
      value: ethers.utils.parseEther(
        CONVERT_COST_TO_STRING(PLAN_ELITE_MONTHLY_COST)
      ),
    });
  });

  it("should NOT renew subscription - payment is not due yet", async () => {
    await subscription
      .connect(merchant)
      .createPlan(PLAN_ELITE_MONTHLY, PLAN_ELITE_MONTHLY_COST, MONTH);

    await subscription.connect(subscriber).subscribeToPlan(PLAN_ELITE_MONTHLY, {
      value: ethers.utils.parseEther(
        CONVERT_COST_TO_STRING(PLAN_ELITE_MONTHLY_COST)
      ),
    });

    let block = await ethers.provider.getBlock("latest");

    // increase block time by a month minus ten sec, so the next payment date has not come yet
    await ethers.provider.send("evm_mine", [
      block.timestamp + DAY_IN_SECONDS * 30 - 10,
    ]);

    await expect(
      subscription.connect(subscriber).renewSubscription({
        value: ethers.utils.parseEther(
          CONVERT_COST_TO_STRING(PLAN_ELITE_MONTHLY_COST)
        ),
      })
    ).to.be.reverted;
  });

  it("should cancel subscription", async () => {
    await subscription
      .connect(merchant)
      .createPlan(PLAN_ELITE_MONTHLY, PLAN_ELITE_MONTHLY_COST, MONTH);
    await subscription
      .connect(subscriber)
      .subscribeToPlan(PLAN_ELITE_MONTHLY, {
        value: ethers.utils.parseEther(
          CONVERT_COST_TO_STRING(PLAN_ELITE_MONTHLY_COST)
        ),
      });
    await subscription.connect(subscriber).cancelSubscription();
    const subscriberObject = await subscription.subscriptions(
      subscriber.address
    );
    expect(subscriberObject.subscriber).to.equal(ethers.constants.AddressZero);
  });

  it("should NOT cancel subscription - no subscription exists", async () => {
    await expect(subscription.connect(subscriber).cancelSubscription()).to.be
      .reverted;
  });
});
