import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { resourceTypeDelete } from '@app-lcs2/core/seeds/resourceType';
import { serviceDolomite } from '@app-lcs2/core/seeds/service';

export const resourceHopDelete = {
  resourceId: '681a9b55ce8bc4ca38020af6',
  resourceTypeId: resourceTypeDelete['resourceTypeId'],
  serviceId: serviceDolomite['serviceId'],
  description: 'A hop delete resource',
  name: 'resource/hop/delete',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
