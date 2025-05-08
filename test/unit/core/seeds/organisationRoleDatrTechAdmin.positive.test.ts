import { organisationRoleDatrTechAdmin } from '@app-lcs2/core/seeds/organisationRole';

describe('organisationRoleDatrTechAdmin', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const organisationRoleExpected = {
        organisationRoleId: '681c0f6015aaa9babe9d8df9',
        organisationId: '681b6491451661fa673e4fc6',
        roleId: '681c0df1001b5e8c8fbbdd55',
        description: 'The datr.tech admin organisation role',
        name: 'organisationRole/datr.tech/admin',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const organisationRoleFound = { ...organisationRoleDatrTechAdmin };

      /*
       * Assert
       */
      expect(organisationRoleFound).toStrictEqual(organisationRoleExpected);
    });
  });
});
