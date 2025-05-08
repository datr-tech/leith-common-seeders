import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { organisationDatrTech } from '@app-lcs2/core/seeds/organisation';

export const organisationUserDatrTechAdmin = {
  organisationId: organisationDatrTech['organisationId'],
  userId: adminUserBase['userId'],
  description: 'The datr.tech admin organisation user',
  name: 'organisationUser/datr.tech/admin',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
