import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';
import { campaignBase } from '@app-lcs2/core/seeds/campaign';
import { templateTypeBase } from '@app-lcs2/core/seeds/templateType';

export const templateBase = {
  templateId: '681b67834825a5b310d57501',
  campaignId: campaignBase['campaignId'],
  templateTypeId: templateTypeBase['templateTypeId'],
  ownerUserId: adminUserBase['userId'],
  description: 'A base template',
  name: 'template/base',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
