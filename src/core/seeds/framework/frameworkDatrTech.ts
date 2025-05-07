import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { frameworkTypeInternal } from '@app-lcs2/core/seeds/frameworkType';

export const frameworkDatrTech = {
  frameworkId: '681a8ff8a30b5cecdb2a33ce',
  frameworkTypeId: frameworkTypeInternal['frameworkTypeId'],
  description: 'An internal datr.tech framework',
  name: 'framework/datr.tech',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
