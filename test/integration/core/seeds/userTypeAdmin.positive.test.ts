import { userTypeAdmin } from './../../../../dist';

describe('userTypeAdmin', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const userTypeExpected = {
        userTypeId: '681a06e1285f943cc6b906c2',
        description: 'An admin user type',
        name: 'userType/admin',
        statusId: '681a044bd4546c227ff1305c',
      };

      /*
       * Act
       */
      const userTypeFound = { ...userTypeAdmin };

      /*
       * Assert
       */
      expect(userTypeFound).toStrictEqual(userTypeExpected);
    });
  });
});
