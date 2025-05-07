import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const resourceTypeDelete = {
  resourceTypeId: '681a102387efd7e7c274346d',
  description: 'A delete resource',
  name: 'delete',
  adminStatusId: adminStatusActive.adminStatusId,
  adminUserId: adminUserBase.userId,
};
