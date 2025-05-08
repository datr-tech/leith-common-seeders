import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const roleAdmin = {
  roleId: '681c0df1001b5e8c8fbbdd55',
  description: 'An admin role',
  name: 'role/admin',
  adminStatusId: adminStatusActive.adminStatusId,
  adminUserId: adminUserBase.userId,
};
