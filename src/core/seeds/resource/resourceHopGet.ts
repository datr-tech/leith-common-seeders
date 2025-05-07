import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { resourceTypeGet } from '@app-lcs2/core/seeds/resourceType';
import { serviceDolomite } from '@app-lcs2/core/seeds/service';

export const resourceHopGet = {
  resourceId: '681a9b25b50c8526cf5e0d13',
  resourceTypeId: resourceTypeGet['resourceTypeId'],
  serviceId: serviceDolomite['serviceId'],
  description: 'A hop get resource',
  name: 'resource/hop/get',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
