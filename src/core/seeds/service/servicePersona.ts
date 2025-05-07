import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { frameworkDatrTech } from '@app-lcs2/core/seeds/framework';

export const servicePersona = {
  serviceId: '681a8e6127acc303ee851228',
  frameworkId: frameworkDatrTech['frameworkId'],
  description: 'The api-persona service',
  name: 'persona',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
