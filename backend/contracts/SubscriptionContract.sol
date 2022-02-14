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
        uint256 planId;
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
    event Received(address from, uint256 amount);
    event Withdrawn(address from, address to, uint256 amount);

    // [Merchant] Creates a plan for users to subscribe to.
    // planId 0: BASIC
    // planId 1: ELITE Month
    // planId 2: ELITE Year
    // planId 3: VIP Month
    // planId 4: VIP Year
    // Note: planId is subject to change.
    function createPlan(
        uint256 planId,
        uint256 cost,
        uint256 durationMonth
    ) external onlyOwner {
        require(cost >= 0, "cost needs to be >= 0");
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
        uint256 timestamp = block.timestamp;
        emit PaymentSent(
            msg.sender,
            plan.merchant,
            plan.cost,
            planId,
            timestamp
        );
        subscriptions[msg.sender] = Subscription(
            msg.sender,
            planId,
            timestamp,
            timestamp + plan.durationMonth * 30 * 1 days,
            false
        );
        emit SubscriptionCreated(
            msg.sender,
            planId,
            timestamp,
            timestamp + plan.durationMonth * 30 * 1 days
        );
    }

    // [USER] Cancels a subscription.
    // NOTE: Subscription will be canceled right away. But client server should wait until the next subscription end date and then perform cancel.
    // NOTE: this contract cannot "signal" off-chain server when a subscription expires. 
    // solution 1) Repeated external call (once every day) to verify subscription expiry status for a subscriber and behave accordingly
    // solution 2) Setup Firebase Functions to call cancelSubscription whenever a subscription expires (need this data stored off-chain in firebase)
    function cancelSubscription() external {
        Subscription storage subscription = subscriptions[msg.sender];
        require(
            subscription.subscriber != address(0),
            "this subscription does not exist"
        );
        require(
            subscription.canceled == false,
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

    // [USER] called to renew subscription and pay the fee. called every payment cycle.
    // Note: CANNOT implement automatic subscription every month. Needs user signing every time.
    function renewSubscription() external payable {
        Subscription storage subscription = subscriptions[msg.sender];
        Plan storage plan = plans[subscription.planId];

        require(
            subscription.subscriber != address(0),
            "this subscription does not exist"
        );

        require(
            msg.value == plan.cost,
            "user sent fund does not match the plan cost."
        );

        // TODO: Currently, subscriber can only re-new the subscription when the current plan has expired.
        // Can the user renew the plan when it has "x" days left?
        // Or only AFTER current plan has expired?
        // Or whenever the subscriber would like?
        require(
            block.timestamp >= subscription.nextPaymentTimeStamp,
            "payment not due yet"
        );

        // send $ to this smart contract
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
            plan.durationMonth *
            30 *
            1 days;
    }

    // [Merchant] re-sets a plan's cost. Subscribers already committed to the plan won't be affected until next renewal date.
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

    // [Merchant] withdraws the balance on this smart contract to the owner.
    function withdraw(uint256 _amount) external onlyOwner {
        require(
            _amount <= address(this).balance,
            "Insufficient balance to withdraw"
        );
        // only owner of this contract will be able to withdraw the balance
        payable(msg.sender).transfer(_amount);
        emit Withdrawn(address(this), msg.sender, _amount);
    }

    // [Merchant] withdraws the balance on this smart contract to a specified address.
    function withdrawTo(address payable _to, uint256 _amount)
        external
        onlyOwner
    {
        require(
            _amount <= address(this).balance,
            "Insufficient balance to withdraw"
        );
        _to.transfer(_amount);
        emit Withdrawn(address(this), _to, _amount);
    }

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/*
public - all can access
external - Cannot be accessed internally, only externally
internal - only this contract and contracts deriving from it can access
private - can be accessed only from this contract
*/
