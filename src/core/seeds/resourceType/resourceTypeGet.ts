import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const resourceTypeGet = {
  resourceTypeId: '681a82b2ae5fce0690be754a',
  description: 'A get resource',
  name: 'get',
  adminStatusId: adminStatusActive.adminStatusId,
  adminUserId: adminUserBase.userId,
};
