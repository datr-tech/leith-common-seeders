import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { organisationDatrTech } from '@app-lcs2/core/seeds/organisation';
import { projectTypeBase } from '@app-lcs2/core/seeds/projectType';

export const projectBase = {
  projectId: '681b61150fef05792a09b219',
  projectTypeId: projectTypeBase['projectTypeId'],
  organisationId: organisationDatrTech['organisationId'],
  ownerUserId: adminUserBase['userId'],
  description: 'The base datr.tech project',
  name: 'project/base',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
