import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const userSessionAdmin = {
  userSessionId: '681c11caf48942187256530d',
  userId: adminUserBase['userId'],
  description: 'An admin user session',
  name: 'userSession/admin',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
