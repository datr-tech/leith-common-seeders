import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { endpointTypeRest } from '@app-lcs2/core/seeds/endpointType';

export const endpointJourneyRest = {
  endpointId: '681a92975f122acb61e2c674',
  endpointTypeId: endpointTypeRest['endpointTypeId'],
  url: 'journey/:journeyId',
  description: 'A journey RESTful endpoint',
  name: 'endpoint/journey/rest',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
