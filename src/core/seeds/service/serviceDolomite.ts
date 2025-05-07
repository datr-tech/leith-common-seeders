import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { frameworkDatrTech } from '@app-lcs2/core/seeds/framework';

export const serviceDolomite = {
  serviceId: '681a7e2b1b9ab46e865d6cd1',
  frameworkId: frameworkDatrTech['frameworkId'],
  description: 'The api-dolomite service',
  name: 'dolomite',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
