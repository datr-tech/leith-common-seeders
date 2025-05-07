import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';

export const userTypeAdmin = {
  userTypeId: '681a06e1285f943cc6b906c2',
  description: 'An admin user type',
  name: 'userType/admin',
  statusId: adminStatusActive['adminStatusId'],
};
