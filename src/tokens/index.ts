// To help typescript find the type
import { NetworkTokens } from '../types';
import { customTokens } from './custom';

import { mainTokens } from './main/index';
import { rinkebyTokens } from './rinkeby/index';

export const tokens = {
  rinkeby: rinkebyTokens,
  main: mainTokens,
  custom: customTokens
};
