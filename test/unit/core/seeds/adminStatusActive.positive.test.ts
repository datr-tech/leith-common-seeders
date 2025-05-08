import { adminStatusActive } from '@app-lcs2/core/seeds/adminStatus';

describe('adminStatusActive', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const adminStatusExpected = {
        adminStatusId: '681a044bd4546c227ff1305c',
        description: 'An active status',
        name: 'adminStatus/active',
      };

      /*
       * Act
       */
      const adminStatusFound = { ...adminStatusActive };

      /*
       * Assert
       */
      expect(adminStatusFound).toStrictEqual(adminStatusExpected);
    });
  });
});
