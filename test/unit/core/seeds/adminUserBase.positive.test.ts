import { adminUserBase } from '@app-lcs2/core/seeds/adminUser';

describe('adminUserBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const adminUserExpected = {
        userId: '681a061ac6e45110dff9dcad',
        userTypeId: '681a06e1285f943cc6b906c2',
        username: 'admin/user/base',
        password: 'admin/user/base',
        adminStatusId: '681a044bd4546c227ff1305c',
      };

      /*
       * Act
       */
      const adminUserFound = { ...adminUserBase };

      /*
       * Assert
       */
      expect(adminUserFound).toStrictEqual(adminUserExpected);
    });
  });
});
