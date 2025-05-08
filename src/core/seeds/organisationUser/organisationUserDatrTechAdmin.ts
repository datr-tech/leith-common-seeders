import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { organisationDatrTech } from '@app-lcs2/core/seeds/organisation';

export const organisationUserDatrTechAdmin = {
  organisationUserId: '681c4aad98a97a956676144e',
  organisationId: organisationDatrTech['organisationId'],
  userId: adminUserBase['userId'],
  description: 'The datr.tech admin organisation user',
  name: 'organisationUser/datr.tech/admin',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
