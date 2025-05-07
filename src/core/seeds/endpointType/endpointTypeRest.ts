import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const endpointTypeRest = {
  endpointTypeId: '681a91e3799797871d7deb33',
  description: 'An RESTful endpoint type',
  name: 'rest',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
