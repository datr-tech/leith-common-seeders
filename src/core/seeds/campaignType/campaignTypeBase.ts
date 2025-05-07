import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const campaignTypeBase = {
  campaignTypeId: '681b60a988ece10d00e58b38',
  description: 'A default (or base) campaign type',
  name: 'campaignType/base',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
