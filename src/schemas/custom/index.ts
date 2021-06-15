import { Schema } from '../../types';
import { ContractRoleSchema } from '../ContractRole/index';
import { ERC1155Schema } from '../ERC1155';
import { ERC20Schema } from '../ERC20';
import { ERC721Schema } from '../ERC721/index';

import { OwnableContractSchema } from './OwnableContract/index';

export const customSchemas: Array<Schema<any>> = [
  OwnableContractSchema,
  ERC20Schema,
  ERC721Schema,
  ERC1155Schema,
  ContractRoleSchema,
];
