const chai = require("chai");
const { solidity } = require("ethereum-waffle");
chai.use(solidity);
chai.use(require("chai-datetime"));

const { expect } = chai;

const DECIMAL_CONVERSION = 10 ** 18;

describe("Subscription contract", function () {
  let subscription, merchant, subscriber;

  beforeEach(async function () {
    [merchant, subscriber] = await ethers.getSigners();
    const Subscription = await ethers.getContractFactory(
      "SubscriptionContract"
    );
    subscription = await Subscription.deploy();
  });

  it("should create a plan", async () => {
    // case 1
    const tx = await subscription
      .connect(merchant)
      .createPlan(0, 0.001 * DECIMAL_CONVERSION, 1);
    const receipt = await tx.wait();
    const event = receipt.events[0];
    expect(event.args[0]).to.equal(merchant.address);
    expect(event.args[1]).to.equal(0);
    expect(new Date(event.args[2] * 1000)).to.closeToTime(
      new Date(Date.now()),
      3
    );
    const plan1 = await subscription.plans(0);
    expect(plan1.planId).to.equal(0);
    expect(plan1.cost).to.equal(0.001 * DECIMAL_CONVERSION);
    expect(plan1.durationMonth).to.equal(1);

    // case 2
    const tx2 = await subscription.createPlan(1, 0.002 * DECIMAL_CONVERSION, 2);
    const receipt2 = await tx2.wait();
    const event2 = receipt2.events[0];
    expect(event2.args[0]).to.equal(merchant.address);
    expect(event2.args[1]).to.equal(1);
    expect(new Date(event2.args[2] * 1000)).to.closeToTime(
      new Date(Date.now()),
      10
    );
    const plan2 = await subscription.plans(1);
    expect(plan2.planId).to.equal(1);
    expect(plan2.cost).to.equal(0.002 * DECIMAL_CONVERSION);
    expect(plan2.durationMonth).to.equal(2);
  });

  it("should NOT create a plan", async () => {
    await expect(subscription.createPlan(0, 0 * DECIMAL_CONVERSION, 1)).to.be
      .reverted;
    await expect(subscription.createPlan(-1, 0.001 * DECIMAL_CONVERSION, 1)).to
      .be.reverted;
    await expect(subscription.createPlan(0, 0.001 * DECIMAL_CONVERSION, 0)).to
      .be.reverted;

    await subscription.createPlan(0, 0.001 * DECIMAL_CONVERSION, 1);
    await expect(subscription.createPlan(0, 0.001 * DECIMAL_CONVERSION, 1)).to
      .be.reverted;
  });

  // it('should create a subscription', async () => {
  //   await subscription.createPlan(token.address, 100, THIRTY_DAYS, {from: merchant});
  //   await subscription.subscribe(0, {from: subscriber});
  //   const block = await web3.eth.getBlock('latest')
  //   const subscription = await subscription.subscriptions(subscriber, 0);
  //   expect(subscription.subscriber === subscriber);
  //   expect(subscription.start.toString() === block.timestamp.toString());
  //   expect(subscription.nextPayment.toString() === (block.timestamp + 86400 * 30).toString());
  // });

  // it('should NOT create a subscription', async () => {
  //   await expectRevert(
  //     subscription.subscribe(0, {from: subscriber}),
  //     'this plan does not exist'
  //   );
  // });

  // it('should subscribe and pay', async () => {
  //   let balanceMerchant, balanceSubscriber;
  //   await subscription.createPlan(token.address, 100, THIRTY_DAYS, {from: merchant});

  //   await subscription.subscribe(0, {from: subscriber});
  //   balanceMerchant = await token.balanceOf(merchant);
  //   balanceSubscriber = await token.balanceOf(subscriber);
  //   expect(balanceMerchant.toString() === '100');
  //   expect(balanceSubscriber.toString() === '900');

  //   await time.increase(THIRTY_DAYS + 1);
  //   await subscription.pay(subscriber, 0);
  //   balanceMerchant = await token.balanceOf(merchant);
  //   balanceSubscriber = await token.balanceOf(subscriber);
  //   expect(balanceMerchant.toString() === '200');
  //   expect(balanceSubscriber.toString() === '800');

  //   await time.increase(THIRTY_DAYS + 1);
  //   await subscription.pay(subscriber, 0);
  //   balanceMerchant = await token.balanceOf(merchant);
  //   balanceSubscriber = await token.balanceOf(subscriber);
  //   expect(balanceMerchant.toString() === '300');
  //   expect(balanceSubscriber.toString() === '700');
  // });

  // it('should subscribe and NOT pay', async () => {
  //   let balanceMerchant, balanceSubscriber;
  //   await subscription.createPlan(token.address, 100, THIRTY_DAYS, {from: merchant});

  //   await subscription.subscribe(0, {from: subscriber});
  //   await time.increase(THIRTY_DAYS - 1);
  //   await expectRevert(
  //     subscription.pay(subscriber, 0),
  //     'not due yet'
  //   );
  // });

  // it('should cancel subscription', async () => {
  //   await subscription.createPlan(token.address, 100, THIRTY_DAYS, {from: merchant});
  //   await subscription.subscribe(0, {from: subscriber});
  //   await subscription.cancel(0, {from: subscriber});
  //   const subscription = await subscription.subscriptions(subscriber, 0);
  //   expect(subscription.subscriber === constants.ZERO_ADDRESS);
  // });

  // it('should NOT cancel subscription', async () => {
  //   await expectRevert(
  //     subscription.cancel(0, {from: subscriber}),
  //     'this subscription does not exist'
  //   );
  // });
});
