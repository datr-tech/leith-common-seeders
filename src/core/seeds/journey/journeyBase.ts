import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { frameworkDatrTech } from '@app-lcs2/core/seeds/framework';
import { journeyTypeBase } from '@app-lcs2/core/seeds/journeyType';

export const journeyBase = {
  journeyId: '681a0c9945449fda5d997940',
  frameworkId: frameworkDatrTech['frameworkId'],
  journeyTypeId: journeyTypeBase['journeyTypeId'],
  description: 'A base journey',
  name: 'journey/base',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
