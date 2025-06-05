import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  R5 = 337,
  TR5 = 33710,
  DR5 = 33711,
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export const FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.R5]: '0x1F68F0Ac4Cd9387A0e6eB6F3B894Cb98177AB0a4',
  [ChainId.TR5]: '0x1F68F0Ac4Cd9387A0e6eB6F3B894Cb98177AB0a4',
  [ChainId.DR5]: '0x1F68F0Ac4Cd9387A0e6eB6F3B894Cb98177AB0a4',
}

export const INIT_CODE_HASHES: { [chainId in ChainId]: string } = {
  [ChainId.R5]: '0xc3c90899ffbab4fde73965749d2c0b9462b16a2965a2d1eafc21630dfb68552c',
  [ChainId.TR5]: '0xc3c90899ffbab4fde73965749d2c0b9462b16a2965a2d1eafc21630dfb68552c',
  [ChainId.DR5]: '0xc3c90899ffbab4fde73965749d2c0b9462b16a2965a2d1eafc21630dfb68552c',
}

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
