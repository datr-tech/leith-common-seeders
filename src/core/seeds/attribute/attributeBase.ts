import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { attributeTypeBase } from '@app-lcs2/core/seeds/attributeType';

export const attributeBase = {
  attributeId: '681bf5d3f135748ddb7485e7',
  attributeTypeId: attributeTypeBase['attributeTypeId'],
  description: 'A base (or default) attribute',
  name: 'attribute/base',
  adminStatusId: adminStatusActive.adminStatusId,
  adminUserId: adminUserBase.userId,
};
