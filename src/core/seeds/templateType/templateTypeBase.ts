import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const templateTypeBase = {
  templateTypeId: '681b67682715b20a05f574ce',
  description: 'A base template type',
  name: 'templateType/base',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
