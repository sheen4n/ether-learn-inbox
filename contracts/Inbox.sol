pragma solidity ^0.4.17;

// linter warnings (red underline) about pragma version can igonored!

contract Inbox {
    string public message;

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}

// Rinkeby
// https://rinkeby.infura.io/v3/6bce40b849a2448b90206225ba7bd4f6
