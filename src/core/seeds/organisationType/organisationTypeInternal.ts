import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';
import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

export const organisationTypeInternal = {
  organisationTypeId: '681b65c249beb3041de8b88a',
  description: 'An internal organisation type',
  name: 'organisationType/internal',
  adminStatusId: adminStatusActive['adminStatusId'],
  adminUserId: adminUserBase['userId'],
};
