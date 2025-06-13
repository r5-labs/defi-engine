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
  [ChainId.R5]: '0xeC1C8476c7b38014B07ce02C080eF38D2166F141',
  [ChainId.TR5]: '0xeC1C8476c7b38014B07ce02C080eF38D2166F141',
  [ChainId.DR5]: '0xeC1C8476c7b38014B07ce02C080eF38D2166F141',
}

export const INIT_CODE_HASHES: { [chainId in ChainId]: string } = {
  [ChainId.R5]: '0x544a6894c2418600f8c457fe5d4135814cf3fa97f6faebe3e5f68ef34f1b02d8',
  [ChainId.TR5]: '0x544a6894c2418600f8c457fe5d4135814cf3fa97f6faebe3e5f68ef34f1b02d8',
  [ChainId.DR5]: '0x544a6894c2418600f8c457fe5d4135814cf3fa97f6faebe3e5f68ef34f1b02d8',
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
