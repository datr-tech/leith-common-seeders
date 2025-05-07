import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { frameworkDatrTech } from '@app-lcs2/core/seeds/framework';

export const serviceGranul8 = {
  serviceId: '681a8e15f3c3819a65f572ce',
  frameworkId: frameworkDatrTech['frameworkId'],
  description: 'The api-granul8 service',
  name: 'granul8',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
