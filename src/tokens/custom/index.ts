import {
  NetworkTokens,
} from '../../types';

export const customTokens: NetworkTokens = {
  canonicalWrappedEther: { name: 'Testnet Canonical Wrapped BNB', symbol: 'WETH', decimals: 18, address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd' },
  otherTokens: [
    { name: 'Rinkeby Test Token', symbol: 'TST', decimals: 18, address: '0xb7dDCF6B64C05D76Adc497AE78AD83ba3883A294' },
    { name: 'Decentraland - Chainbreakers', symbol: 'MANA', decimals: 18, address: '0x0f8528c53fecb54b7005525a3e797e261a51b88e' },
  ],
};
