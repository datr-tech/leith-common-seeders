import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { frameworkDatrTech } from '@app-lcs2/core/seeds/framework';

export const serviceFreight = {
  serviceId: '681a8db593f5c51bde7882cb',
  frameworkId: frameworkDatrTech['frameworkId'],
  description: 'The api-freight service',
  name: 'freight',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
