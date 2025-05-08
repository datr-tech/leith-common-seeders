import { roleAdmin } from '@app-lcs2/core/seeds/role';

describe('roleAdmin', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const roleExpected = {
        roleId: '681c0df1001b5e8c8fbbdd55',
        description: 'An admin role',
        name: 'role/admin',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const roleFound = { ...roleAdmin };

      /*
       * Assert
       */
      expect(roleFound).toStrictEqual(roleExpected);
    });
  });
});
