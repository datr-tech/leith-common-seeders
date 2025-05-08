import { userAttributeAdminBase } from './../../../../dist';

describe('userAttributeAdminBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const userAttributeExpect = {
        userAttributeId: '681bf7c14078454c1644b843',
        attributeId: '681bf5d3f135748ddb7485e7',
        userId: '681a061ac6e45110dff9dcad',
        description: 'A base (or default) attribute for the admin user',
        name: 'userAttribute/admin/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const userAttributeFound = { ...userAttributeAdminBase };
      expect(userAttributeFound).toStrictEqual(userAttributeExpect);
    });
  });
});
