import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const resourceTypePost = {
  resourceTypeId: '681a8322d111bd0947c4b4d9',
  description: 'A post resource',
  name: 'post',
  adminStatusId: adminStatusActive.adminStatusId,
  adminUserId: adminUserBase.userId,
};
