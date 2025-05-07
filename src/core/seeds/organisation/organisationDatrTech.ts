import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { frameworkDatrTech } from '@app-lcs2/core/seeds/framework';
import { organisationTypeInternal } from '@app-lcs2/core/seeds/organisationType';

export const organisationDatrTech = {
  organisationId: '681b6491451661fa673e4fc6',
  frameworkId: frameworkDatrTech['frameworkId'],
  organisationTypeId: organisationTypeInternal['organisationTypeId'],
  description: 'The datr.tech organisation',
  name: 'organisation/datr.tech',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
