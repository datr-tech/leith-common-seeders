import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { frameworkDatrTech } from '@app-lcs2/core/seeds/framework';

export const serviceProc = {
  serviceId: '681a8e8d5280e9b6cb06eda7',
  frameworkId: frameworkDatrTech['frameworkId'],
  description: 'The api-proc service',
  name: 'proc',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
