// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface ContractWinner {
    function attempt() external;
}

contract CallContract {
        function callWinner(address contractAddress) external {
        ContractWinner(contractAddress).attempt();
    }
}