import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const attributeTypeBase = {
  attributeTypeId: '681bf65ff69614d01dc3746c',
  description: 'A base (or default) attribute type',
  name: 'attributeType/base',
  adminStatusId: adminStatusActive.adminStatusId,
  adminUserId: adminUserBase.userId,
};
