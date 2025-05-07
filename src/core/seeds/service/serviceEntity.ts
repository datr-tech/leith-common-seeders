import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { frameworkDatrTech } from '@app-lcs2/core/seeds/framework';

export const serviceEntity = {
  serviceId: '681a7f49bca9b723b95d9c1e',
  frameworkId: frameworkDatrTech['frameworkId'],
  description: 'The api-entity service',
  name: 'entity',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
