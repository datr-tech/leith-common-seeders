import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { attributeBase } from '@app-lcs2/core/seeds/attribute';
import { resourceHopGet } from '@app-lcs2/core/seeds/resource';

export const resourceAttributeHopGetBase = {
  resourceAttributeId: '681bf7c14078454c1644b843',
  attributeId: attributeBase['attributeId'],
  resourceId: resourceHopGet['resourceId'],
  description: 'A base (or default) attribute for the hop get resource',
  name: 'resourceAttribute/hop/get/base',
  adminStatusId: adminStatusActive.adminStatusId,
  adminUserId: adminUserBase.userId,
};
