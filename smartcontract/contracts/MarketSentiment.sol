// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract MarketSentiment {

 // address of the owner  [the one who can add tickers]
    address public owner;
    // track cryptos that were set by the owner
    string[] public tickersArray;

    // triggers on deploy

    constructor() {
            owner = msg.sender;
    }

    // definition of any ticker that the owner creates
    struct ticker {
        bool exists;
        uint256 up;
        uint256 down;
        mapping(address => bool) Voters;
    }

    // when someone votes - we emmit tickerUpdated (getting status to moralis db)
    event tickerupdated (
        uint256 up,
        uint256 down,
        address voter,
        string ticker
    );

    mapping(string => ticker) private Tickers;

    function addTicker(string memory _ticker) public {
        require(msg.sender == owner, "Only the owner can create tickers");

        ticker storage newTicker = Tickers[_ticker];
        newTicker.exists = true;
        tickersArray.push(_ticker);
    }

}