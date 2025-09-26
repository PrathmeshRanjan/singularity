// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RecurringPayments is ReentrancyGuard, Ownable {
    struct Subscription {
        address subscriber;
        address payee;
        address token;
        uint256 amount;
        uint256 interval;
        uint256 maxPayments;
        uint256 paymentsMade;
        uint256 lastPayment;
        bool isActive;
    }

    mapping(bytes32 => Subscription) public subscriptions;
    mapping(address => bool) public authorizedExecutors;
    
    event SubscriptionCreated(bytes32 indexed subscriptionId, address indexed subscriber, address indexed payee);
    event PaymentExecuted(bytes32 indexed subscriptionId, uint256 amount);
    event SubscriptionCancelled(bytes32 indexed subscriptionId);

    modifier onlyAuthorizedExecutor() {
        require(authorizedExecutors[msg.sender], "Not authorized");
        _;
    }

    constructor(address[] memory _authorizedExecutors) Ownable(msg.sender) {
        for (uint i = 0; i < _authorizedExecutors.length; i++) {
            authorizedExecutors[_authorizedExecutors[i]] = true;
        }
    }

    function createSubscription(
        address _payee,
        address _token,
        uint256 _amount,
        uint256 _interval,
        uint256 _maxPayments
    ) external returns (bytes32) {
        require(_payee != address(0), "Invalid payee");
        require(_token != address(0), "Invalid token");
        require(_amount > 0, "Amount must be positive");
        require(_interval > 0, "Interval must be positive");
        require(_maxPayments > 0, "Max payments must be positive");

        bytes32 subscriptionId = keccak256(abi.encodePacked(
            msg.sender, _payee, _token, _amount, _interval, block.timestamp, block.number
        ));

        subscriptions[subscriptionId] = Subscription({
            subscriber: msg.sender,
            payee: _payee,
            token: _token,
            amount: _amount,
            interval: _interval,
            maxPayments: _maxPayments,
            paymentsMade: 0,
            lastPayment: 0,
            isActive: true
        });

        // User must approve this contract to spend tokens
        require(
            IERC20(_token).allowance(msg.sender, address(this)) >= _amount * _maxPayments,
            "Insufficient allowance"
        );

        emit SubscriptionCreated(subscriptionId, msg.sender, _payee);
        return subscriptionId;
    }

    function executePayment(bytes32 _subscriptionId) external onlyAuthorizedExecutor nonReentrant returns (bool) {
        Subscription storage sub = subscriptions[_subscriptionId];
        
        require(sub.isActive, "Subscription not active");
        require(sub.paymentsMade < sub.maxPayments, "Max payments reached");
        require(block.timestamp >= sub.lastPayment + sub.interval, "Too early");

        // Transfer tokens from subscriber to payee
        require(
            IERC20(sub.token).transferFrom(sub.subscriber, sub.payee, sub.amount),
            "Transfer failed"
        );

        sub.paymentsMade++;
        sub.lastPayment = block.timestamp;

        if (sub.paymentsMade >= sub.maxPayments) {
            sub.isActive = false;
        }

        emit PaymentExecuted(_subscriptionId, sub.amount);
        return true;
    }

    function cancelSubscription(bytes32 _subscriptionId) external {
        Subscription storage sub = subscriptions[_subscriptionId];
        require(msg.sender == sub.subscriber, "Only subscriber can cancel");
        
        sub.isActive = false;
        emit SubscriptionCancelled(_subscriptionId);
    }

    function addAuthorizedExecutor(address _executor) external onlyOwner {
        authorizedExecutors[_executor] = true;
    }

    function removeAuthorizedExecutor(address _executor) external onlyOwner {
        authorizedExecutors[_executor] = false;
    }

    function getSubscription(bytes32 _subscriptionId) external view returns (
        address subscriber,
        address payee,
        address token,
        uint256 amount,
        uint256 interval,
        uint256 maxPayments,
        uint256 paymentsMade,
        uint256 lastPayment,
        bool isActive
    ) {
        Subscription storage sub = subscriptions[_subscriptionId];
        return (
            sub.subscriber,
            sub.payee,
            sub.token,
            sub.amount,
            sub.interval,
            sub.maxPayments,
            sub.paymentsMade,
            sub.lastPayment,
            sub.isActive
        );
    }

    function isAuthorizedExecutor(address _executor) external view returns (bool) {
        return authorizedExecutors[_executor];
    }
}
