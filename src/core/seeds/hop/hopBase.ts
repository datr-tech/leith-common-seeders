import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { journeyBase } from '@app-lcs2/core/seeds/journey';
import { resourceHopGet } from '@app-lcs2/core/seeds/resource';

export const hopBase = {
  hopId: '681a017def8b6fd17c3ff585',
  journeyId: journeyBase['journeyId'],
  resourceId: resourceHopGet['resourceId'],
  description: 'A hop beginning from resource/hop/get',
  name: 'hop/base',
  order: 1,
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
