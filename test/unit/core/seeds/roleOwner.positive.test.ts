import { roleOwner } from '@app-lcs2/core/seeds/role';

describe('roleOwner', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const roleExpected = {
        roleId: '681c0e37a88fe304cfd3a979',
        description: 'An ownership role',
        name: 'role/owner',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const roleFound = { ...roleOwner };

      /*
       * Owner
       */
      expect(roleFound).toStrictEqual(roleExpected);
    });
  });
});
