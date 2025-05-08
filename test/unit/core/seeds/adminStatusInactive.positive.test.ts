import { adminStatusInactive } from '@app-lcs2/core/seeds/adminStatus';

describe('adminStatusInactive', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const adminStatusExpected = {
        adminStatusId: '681a800aa7df1c61370440fc',
        description: 'An inactive status',
        name: 'adminStatus/inactive',
      };

      /*
       * Act
       */
      const adminStatusFound = { ...adminStatusInactive };

      /*
       * Assert
       */
      expect(adminStatusFound).toStrictEqual(adminStatusExpected);
    });
  });
});
