import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const journeyTypeBase = {
  journeyTypeId: '681a0bece67fb30d1d10c9ca',
  description: 'A base journey type',
  name: 'journeyType/base',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
