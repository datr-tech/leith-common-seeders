import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { organisationDatrTech } from '@app-lcs2/core/seeds/organisation';
import { roleAdmin } from '@app-lcs2/core/seeds/role';

export const organisationRoleDatrTechAdmin = {
  organisationRoleId: '681c0f6015aaa9babe9d8df9',
  organisationId: organisationDatrTech['organisationId'],
  roleId: roleAdmin['roleId'],
  description: 'The datr.tech admin organisation role',
  name: 'organisationRole/datr.tech/admin',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
