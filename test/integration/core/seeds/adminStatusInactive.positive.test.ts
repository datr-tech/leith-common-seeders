import { adminStatusInactive } from './../../../../dist';

describe('adminStatusInactive', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const adminStatusInactiveExpect = {
        adminStatusId: '681a800aa7df1c61370440fc',
        description: 'An inactive status',
        name: 'adminStatus/inactive',
      };
      const adminStatusInactiveFound = { ...adminStatusInactive };
      expect(adminStatusInactiveFound).toStrictEqual(adminStatusInactiveExpect);
    });
  });
});
