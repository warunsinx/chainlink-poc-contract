// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract TestChainLinkPriceFeed {
    function getLatestPrice(
        address priceFeedAddress
    ) public view returns (int, uint8) {
        uint8 decimals = AggregatorV3Interface(priceFeedAddress).decimals();
        (, int answer, , , ) = AggregatorV3Interface(priceFeedAddress)
            .latestRoundData();
        return (answer, decimals);
    }
}
