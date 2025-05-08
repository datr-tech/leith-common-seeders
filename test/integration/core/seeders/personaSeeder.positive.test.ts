const status = { status: 'success' };
const organisationModelMockSave = jest.fn().mockResolvedValue(status);
const organisationRoleModelMockSave = jest.fn().mockResolvedValue(status);
const organisationTypeModelMockSave = jest.fn().mockResolvedValue(status);
const organisationUserModelMockSave = jest.fn().mockResolvedValue(status);
const roleModelMockSave = jest.fn().mockResolvedValue(status);
const userModelMockSave = jest.fn().mockResolvedValue(status);
const userSessionModelMockSave = jest.fn().mockResolvedValue(status);
const userTypeModelMockSave = jest.fn().mockResolvedValue(status);

jest.mock('@test-lcs2/doubles/mocks/models/OrganisationModelMock', () => ({
  __esModule: true,
  OrganisationModelMock: jest.fn().mockImplementation(() => {
    return { save: organisationModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/OrganisationRoleModelMock', () => ({
  __esModule: true,
  OrganisationRoleModelMock: jest.fn().mockImplementation(() => {
    return { save: organisationRoleModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/OrganisationTypeModelMock', () => ({
  __esModule: true,
  OrganisationTypeModelMock: jest.fn().mockImplementation(() => {
    return { save: organisationTypeModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/OrganisationUserModelMock', () => ({
  __esModule: true,
  OrganisationUserModelMock: jest.fn().mockImplementation(() => {
    return { save: organisationUserModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/RoleModelMock', () => ({
  __esModule: true,
  RoleModelMock: jest.fn().mockImplementation(() => {
    return { save: roleModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/UserModelMock', () => ({
  __esModule: true,
  UserModelMock: jest.fn().mockImplementation(() => {
    return { save: userModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/UserSessionModelMock', () => ({
  __esModule: true,
  UserSessionModelMock: jest.fn().mockImplementation(() => {
    return { save: userSessionModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/UserTypeModelMock', () => ({
  __esModule: true,
  UserTypeModelMock: jest.fn().mockImplementation(() => {
    return { save: userTypeModelMockSave };
  }),
}));

import { OrganisationModelMock } from '@test-lcs2/doubles/mocks/models/OrganisationModelMock';
import { OrganisationRoleModelMock } from '@test-lcs2/doubles/mocks/models/OrganisationRoleModelMock';
import { OrganisationTypeModelMock } from '@test-lcs2/doubles/mocks/models/OrganisationTypeModelMock';
import { OrganisationUserModelMock } from '@test-lcs2/doubles/mocks/models/OrganisationUserModelMock';
import { RoleModelMock } from '@test-lcs2/doubles/mocks/models/RoleModelMock';
import { UserModelMock } from '@test-lcs2/doubles/mocks/models/UserModelMock';
import { UserSessionModelMock } from '@test-lcs2/doubles/mocks/models/UserSessionModelMock';
import { UserTypeModelMock } from '@test-lcs2/doubles/mocks/models/UserTypeModelMock';

import { personaSeeder } from './../../../../dist';

describe('personaSeeder', () => {
  describe('positive', () => {
    test('should make the expected number of (mocked) child calls', async () => {
      /*
       * Act
       */
      await personaSeeder(
        OrganisationModelMock,
        OrganisationRoleModelMock,
        OrganisationTypeModelMock,
        OrganisationUserModelMock,
        RoleModelMock,
        UserModelMock,
        UserSessionModelMock,
        UserTypeModelMock,
      );

      /*
       * Assert
       */
      expect(organisationModelMockSave).toHaveBeenCalledTimes(1);
      expect(organisationRoleModelMockSave).toHaveBeenCalledTimes(1);
      expect(organisationTypeModelMockSave).toHaveBeenCalledTimes(2);
      expect(organisationUserModelMockSave).toHaveBeenCalledTimes(1);
      expect(roleModelMockSave).toHaveBeenCalledTimes(2);
      expect(userModelMockSave).toHaveBeenCalledTimes(1);
      expect(userSessionModelMockSave).toHaveBeenCalledTimes(1);
      expect(userTypeModelMockSave).toHaveBeenCalledTimes(1);
    });
  });
});
