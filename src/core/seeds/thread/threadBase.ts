import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { hopBase } from '@app-lcs2/core/seeds/hop';
import { processBase } from '@app-lcs2/core/seeds/process';

export const threadBase = {
  threadId: '681c57eea1e012c8279d7603',
  processId: processBase['processId'],
  hopId: hopBase['hopId'],
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
