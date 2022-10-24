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

    
    function vote(string memory _ticker, bool _vote) public {
        require(Tickers[_ticker].exists, "Can't vote on this coin");
        require(!Tickers[_ticker].Voters[msg.sender], "You have already voted for this coin");

        ticker storage t = Tickers[_ticker];
        t.Voters[msg.sender] = true;

        if(_vote){
            t.up++;
        } else {
            t.down++;
        }

        emit tickerupdated (t.up,t.down,msg.sender,_ticker);
    }

}