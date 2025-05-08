import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { attributeBase } from '@app-lcs2/core/seeds/attribute';

export const userAttributeAdminBase = {
  userAttributeId: '681bf7c14078454c1644b843',
  attributeId: attributeBase['attributeId'],
  userId: adminUserBase.userId,
  description: 'A base (or default) attribute for the admin user',
  name: 'userAttribute/admin/base',
  adminStatusId: adminStatusActive.adminStatusId,
  adminUserId: adminUserBase.userId,
};
