pragma solidity >=0.5.0;

interface IR5V2Callee {
    function R5V2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
