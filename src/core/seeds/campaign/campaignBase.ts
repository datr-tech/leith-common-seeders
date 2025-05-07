import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { campaignTypeBase } from '@app-lcs2/core/seeds/campaignType';
import { projectBase } from '@app-lcs2/core/seeds/project';

export const campaignBase = {
  campaignId: '681b609700e07d78b7c58e0b',
  campaignTypeId: campaignTypeBase['campaignTypeId'],
  ownerUserId: adminUserBase['userId'],
  projectId: projectBase['projectId'],
  description: 'A default (or base) campaign',
  name: 'campaign/base',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
