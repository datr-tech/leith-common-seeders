import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { frameworkDatrTech } from '@app-lcs2/core/seeds/framework';
import { journeyBase } from '@app-lcs2/core/seeds/journey';

export const processBase = {
  processId: '681c56ae695d446f8c137bbe',
  frameworkId: frameworkDatrTech['frameworkId'],
  journeyId: journeyBase['journeyId'],
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
