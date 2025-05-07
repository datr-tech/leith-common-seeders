import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { userTypeAdmin } from '@app-lcs2/core/seeds/userType';

export const adminUserBase = {
  userId: '681a061ac6e45110dff9dcad',
  userTypeId: userTypeAdmin['userTypeId'],
  username: 'admin/user/base',
  password: 'admin/user/base',
  adminStatusId: adminStatusActive['adminStatusId'],
};
