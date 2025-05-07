import { userTypeAdmin } from '@app-lcs2/core/seeds/userType';

describe('userTypeAdmin', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const userTypeAdminExpect = {
        userTypeId: '681a06e1285f943cc6b906c2',
        description: 'An admin user type',
        name: 'userType/admin',
        statusId: '681a044bd4546c227ff1305c',
      };
      const userTypeAdminFound = { ...userTypeAdmin };
      expect(userTypeAdminFound).toStrictEqual(userTypeAdminExpect);
    });
  });
});
