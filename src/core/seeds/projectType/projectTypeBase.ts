import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const projectTypeBase = {
  projectTypeId: '681b641135cf8adaa1a628d1',
  description: 'A base project type',
  name: 'projectType/base',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
