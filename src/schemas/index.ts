// To help typescript find the type
import { Schema } from '../types';

import { mainSchemas } from './main/index';
import { rinkebySchemas } from './rinkeby/index';
import { customSchemas } from './custom/index';

export const schemas = {
  rinkeby: rinkebySchemas,
  main: mainSchemas,
  custom: customSchemas,
};
