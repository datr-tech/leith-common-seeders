import { userSessionAdmin } from '@app-lcs2/core/seeds/userSession';

describe('userSessionAdmin', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const userSessionExpected = {
        userSessionId: '681c11caf48942187256530d',
        userId: '681a061ac6e45110dff9dcad',
        description: 'An admin user session',
        name: 'userSession/admin',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const userSessionFound = { ...userSessionAdmin };

      /*
       * Assert
       */
      expect(userSessionFound).toStrictEqual(userSessionExpected);
    });
  });
});
