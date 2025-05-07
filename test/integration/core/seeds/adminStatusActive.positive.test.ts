import { adminStatusActive } from './../../../../dist';

describe('adminStatusActive', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const adminStatusActiveExpect = {
        adminStatusId: '681a044bd4546c227ff1305c',
        description: 'An active status',
        name: 'adminStatus/active',
      };
      const adminStatusActiveFound = { ...adminStatusActive };
      expect(adminStatusActiveFound).toStrictEqual(adminStatusActiveExpect);
    });
  });
});
