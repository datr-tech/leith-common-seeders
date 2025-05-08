import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const roleOwner = {
  roleId: '681c0e37a88fe304cfd3a979',
  description: 'An ownership role',
  name: 'role/owner',
  adminStatusId: adminStatusActive.adminStatusId,
  adminUserId: adminUserBase.userId,
};
