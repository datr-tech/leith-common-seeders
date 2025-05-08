import { userAdmin } from './../../../../dist';

describe('userAdmin', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const userExpected = {
        userId: '681a061ac6e45110dff9dcad',
        userTypeId: '681a06e1285f943cc6b906c2',
        username: 'admin/user/base',
        password: 'admin/user/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const userFound = { ...userAdmin };
      expect(userFound).toStrictEqual(userExpected);
    });
  });
});
