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
  [ChainId.R5]: '0xf71bdA68fA2Ef89dD1402188fBD55cdb74b6A407',
  [ChainId.TR5]: '0xf71bdA68fA2Ef89dD1402188fBD55cdb74b6A407',
  [ChainId.DR5]: '0xf71bdA68fA2Ef89dD1402188fBD55cdb74b6A407',
}

export const ROUTER_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.R5]: '0x70dA5c229f2Be232FC4CE2A4cC07470bcF895689',
  [ChainId.TR5]: '0x70dA5c229f2Be232FC4CE2A4cC07470bcF895689',
  [ChainId.DR5]: '0x70dA5c229f2Be232FC4CE2A4cC07470bcF895689'
}

export const INIT_CODE_HASHES: { [chainId in ChainId]: string } = {
  [ChainId.R5]: '0x544a6894c2418600f8c457fe5d4135814cf3fa97f6faebe3e5f68ef34f1b02d8',
  [ChainId.TR5]: '0x544a6894c2418600f8c457fe5d4135814cf3fa97f6faebe3e5f68ef34f1b02d8',
  [ChainId.DR5]: '0x544a6894c2418600f8c457fe5d4135814cf3fa97f6faebe3e5f68ef34f1b02d8',
}

export const WR5: { [chainId in ChainId]: string } = {
  [ChainId.R5]: '0x8cDAb49A98e190A14B1b1795A4f0E9cDa80445b4',
  [ChainId.TR5]: '0x8cDAb49A98e190A14B1b1795A4f0E9cDa80445b4',
  [ChainId.DR5]: '0x8cDAb49A98e190A14B1b1795A4f0E9cDa80445b4'
}

export const CHAIN_ID: { [chainId in ChainId]: string } = {
  [ChainId.R5]: '337',
  [ChainId.TR5]: '33710',
  [ChainId.DR5]: '33711'
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
