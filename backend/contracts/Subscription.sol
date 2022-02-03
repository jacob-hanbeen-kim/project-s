// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

// Monthly subscription based contract utilizing ERC-20 tokens (e.g. Ethereum)
// TODO Improvements: change from monthly to selection-based escrow subscription: get the user to store e.g) 1 year worth of subscription to the contract account
// and get consent to withdraw monthly from the deposited escrow. When user wants to cancel, return the remaining balance.
// TODO Improvements: implement using ERC-948 (opt-out type subscription based token. Not properly implemented yet)
contract Payment is Ownable {
// TODO: implement plan id as enum.    
//   enum PlanId {
//       Basic,
//       Pro,
//       Premium
//   }

  struct Plan {
    address merchant;
    address token;
    uint amount;
    uint frequency;
  }
  struct Subscription {
    address subscriber;
    uint start;
    uint nextPayment;
  }

  mapping(uint => Plan) public plans; // Plan type (0: basic, 1: pro, 2: premium; subject to change)
  mapping(address => mapping(uint => Subscription)) public subscriptions; // Stores each account's subscription info 

  event PlanCreated(
    address merchant,
    uint planId,
    uint date
  );
  event SubscriptionCreated(
    address subscriber,
    uint planId,
    uint date
  );
  event SubscriptionCancelled(
    address subscriber,
    uint planId,
    uint date
  );
  event PaymentSent(
    address from,
    address to,
    uint amount,
    uint planId,
    uint date
  );

  // To be called by merchant
  function createPlan(uint planId, address token, uint amount, uint frequency) external onlyOwner{
    require(token != address(0), 'address cannot be null address');
    require(amount > 0, 'amount needs to be > 0');
    require(frequency > 0, 'frequency needs to be > 0');
    require(0 <= planId, 'invalid planId. 0: basic, 1: pro, 2: premium; subject to change.');
    require(planId < 3, 'invalid planId. 0: basic, 1: pro, 2: premium; subject to change.');

    plans[planId] = Plan(
      msg.sender, 
      token,
      amount, 
      frequency
    );
  }

  // To be called by user
  function subscribe(uint planId) external {
    IERC20 token = IERC20(plans[planId].token);
    Plan storage plan = plans[planId];
    require(plan.merchant != address(0), 'this plan does not exist');
    require(token.balanceOf(msg.sender) >= plan.amount, 'not enough token balance to fulfill the monthly payment');

    token.transferFrom(msg.sender, plan.merchant, plan.amount);
    emit PaymentSent(
      msg.sender, 
      plan.merchant, 
      plan.amount, 
      planId, 
      block.timestamp
    );

    subscriptions[msg.sender][planId] = Subscription(
      msg.sender, 
      block.timestamp, 
      block.timestamp + plan.frequency
    );
    emit SubscriptionCreated(msg.sender, planId, block.timestamp);
  }

  // To be called by user
  function cancel(uint planId) external {
    Subscription storage subscription = subscriptions[msg.sender][planId];
    require(
      subscription.subscriber != address(0), 
      'this subscription does not exist'
    );
    // TODO Improvements: check remaining $ to be collected, and return remaining balance.
    delete subscriptions[msg.sender][planId]; 
    emit SubscriptionCancelled(msg.sender, planId, block.timestamp);
  }

  // To be called by both user and merchant
  function pay(address subscriber, uint planId) external {
    Subscription storage subscription = subscriptions[subscriber][planId];
    Plan storage plan = plans[planId];
    IERC20 token = IERC20(plan.token);
    require(
      subscription.subscriber != address(0), 
      'this subscription does not exist'
    );
    require(
      block.timestamp > subscription.nextPayment,
      'payment not due yet'
    );

    token.transferFrom(subscriber, plan.merchant, plan.amount);  
    emit PaymentSent(
      subscriber,
      plan.merchant, 
      plan.amount, 
      planId, 
      block.timestamp
    );
    subscription.nextPayment = subscription.nextPayment + plan.frequency;
  }
}

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import "@openzeppelin/contracts/access/Ownable.sol";