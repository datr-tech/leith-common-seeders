import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const frameworkTypeInternal = {
  frameworkTypeId: '681a8fca2845e06bed7cc5eb',
  description: 'An internal framework type',
  name: 'internal',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
