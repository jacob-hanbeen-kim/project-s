// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

/*
Monthly subscription based contract utilizing ERC-20 tokens (e.g. Ethereum)
TODO Improvements: maybe change from monthly/yearly to selection-based escrow subscription: get the user to store e.g) 1 year worth of subscription to the contract account
and get consent to withdraw monthly from the deposited escrow. When user wants to cancel, return the remaining balance.
TODO Improvements: implement using ERC-948 (opt-out type subscription based token. Not properly implemented yet)
*/
contract SubscriptionContract is Ownable {
    struct Plan {
        uint planId;
        address merchant;
        uint256 cost;
        uint256 durationMonth;
    }
    struct Subscription {
        address subscriber;
        uint256 planId;
        uint256 startTimeStamp;
        uint256 nextPaymentTimeStamp;
        bool canceled;
    }

    mapping(uint256 => Plan) public plans; // Stores subscription plan information
    mapping(address => Subscription) public subscriptions; // Stores each user's subscription info

    event PlanCreated(address merchant, uint256 planId, uint256 date);
    event SubscriptionCreated(
        address subscriber,
        uint256 planId,
        uint256 date,
        uint256 nextPaymentDate
    );
    event SubscriptionCancelled(
        address subscriber,
        uint256 planId,
        uint256 date,
        uint256 validUntil
    );
    event PaymentSent(
        address from,
        address to,
        uint256 cost,
        uint256 planId,
        uint256 date
    );
    event NewPlanCostSet(uint256 planId, uint256 previousCost, uint256 newCost);

    // [Merchant] Creates a plan for users to subscribe to.
    // planId 0: ELITE Month
    // planId 1: ELITE Year
    // planId 2: VIP Month
    // planId 3: VIP Year
    function createPlan(
        uint256 planId,
        uint256 cost,
        uint256 durationMonth
    ) external onlyOwner {
        require(cost > 0, "cost needs to be > 0");
        require(
            durationMonth > 0,
            "durationMonth needs to be set correctly. Will typically be a month(1) or a year(12)"
        );
        require(0 <= planId, "invalid planId.");
        require(plans[planId].merchant == address(0), "planId alrady taken");

        plans[planId] = Plan(planId, msg.sender, cost, durationMonth);
        emit PlanCreated(msg.sender, planId, block.timestamp);
    }

    // [USER] Subscribes to a plan.
    function subscribeToPlan(uint256 planId) external payable {
        Plan storage plan = plans[planId];
        require(plan.merchant != address(0), "this plan does not exist");
        require(
            msg.value >= plan.cost,
            "not enough balance to fulfill the payment"
        );
        require(
            msg.value == plan.cost,
            "more balance was sent then required cost"
        );
        require(
            subscriptions[msg.sender].subscriber == address(0),
            "the user already has subscribed to this plan"
        );

        // take $ sent from the caller to this smart contract address
        require(
            msg.value == plan.cost,
            "sent fund does not match the plan cost"
        );
        payable(address(this)).transfer(msg.value);
        emit PaymentSent(
            msg.sender,
            plan.merchant,
            plan.cost,
            planId,
            block.timestamp
        );

        subscriptions[msg.sender] = Subscription(
            msg.sender,
            planId,
            block.timestamp,
            block.timestamp + plan.durationMonth * 30 * 1 days,
            false
        );
        emit SubscriptionCreated(
            msg.sender,
            planId,
            block.timestamp,
            block.timestamp + plan.durationMonth * 30 * 1 days
        );
    }

    // [USER] Cancels a subscription.
    // TODO Improvements: check remaining $ to be collected, and return remaining balance.
    function cancelSubscription() external {
        Subscription storage subscription = subscriptions[msg.sender];
        require(
            subscription.subscriber != address(0),
            "this subscription does not exist"
        );
        require(
            subscription.canceled != false,
            "This subscription has already been canceled"
        );

        delete subscriptions[msg.sender];
        emit SubscriptionCancelled(
            msg.sender,
            subscription.planId,
            block.timestamp,
            subscription.nextPaymentTimeStamp
        );
    }

    // [USER] called to pay every payment duration.
    // TODO: when can a user call this? When the plan has x days left?
    function renewSubscription() external payable {
        Subscription storage subscription = subscriptions[msg.sender];
        Plan storage plan = plans[subscription.planId];

        require(
            subscription.subscriber != address(0),
            "this subscription does not exist"
        );

        // send $ to this smart contract
        require(
            msg.value == plan.cost,
            "user sent fund does not match the plan cost."
        );
        payable(address(this)).transfer(msg.value);
        emit PaymentSent(
            subscription.subscriber,
            plan.merchant,
            plan.cost,
            subscription.planId,
            block.timestamp
        );
        subscription.nextPaymentTimeStamp =
            subscription.nextPaymentTimeStamp +
            plan.durationMonth * 30 * 1 days;
    }
    
    // [Merchant] re-sets a plan's cost 
    function setPlanCost(uint256 planId, uint256 newCost) external onlyOwner {
        require(
            plans[planId].merchant != address(0),
            "this plan does not exist"
        );
        uint256 previousCost = plans[planId].cost;
        plans[planId].cost = newCost;
        emit NewPlanCostSet(planId, previousCost, newCost);
    }

    // [Merchant] get remaining balance of this smart contract
    function getBalance() external view onlyOwner returns (uint256) {
        return address(this).balance;
    }

    // [Merchant] withdraws the balance on this smart contract
    function withdraw() external onlyOwner {
        // only owner of this contract will be able to withdraw the balance
        payable(msg.sender).transfer(address(this).balance);
    }
}

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/*
public - all can access
external - Cannot be accessed internally, only externally
internal - only this contract and contracts deriving from it can access
private - can be accessed only from this contract
*/
