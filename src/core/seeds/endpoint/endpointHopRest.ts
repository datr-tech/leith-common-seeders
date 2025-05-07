import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { endpointTypeRest } from '@app-lcs2/core/seeds/endpointType';

export const endpointHopRest = {
  endpointId: '681a12cd8f045c6299109c47',
  endpointTypeId: endpointTypeRest['endpointTypeId'],
  url: 'hop/:hopId',
  description: 'A hop RESTful endpoint',
  name: 'endpoint/hop/rest',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
