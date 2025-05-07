import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const resourceTypePatch = {
  resourceTypeId: '681a82e847354a2e3caeb3df',
  description: 'A patch resource',
  name: 'patch',
  adminStatusId: adminStatusActive.adminStatusId,
  adminUserId: adminUserBase.userId,
};
