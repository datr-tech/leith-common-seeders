import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const organisationTypeExternal = {
  organisationTypeId: '681c0d336ea6e1417aac51a8',
  description: 'An external organisation type',
  name: 'organisationType/external',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
