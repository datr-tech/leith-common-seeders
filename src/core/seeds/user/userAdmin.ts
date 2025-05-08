import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { userTypeAdmin } from '@app-lcs2/core/seeds/userType';

export const userAdmin = {
  userId: adminUserBase['userId'],
  userTypeId: userTypeAdmin['userTypeId'],
  username: adminUserBase['username'],
  password: adminUserBase['password'],
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
