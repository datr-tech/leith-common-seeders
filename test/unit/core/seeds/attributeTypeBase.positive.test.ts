import { attributeTypeBase } from '@app-lcs2/core/seeds/attributeType';

describe('attributeTypeBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const attributeTypeExpected = {
        attributeTypeId: '681bf65ff69614d01dc3746c',
        description: 'A base (or default) attribute type',
        name: 'attributeType/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const attributeTypeFound = { ...attributeTypeBase };

      /*
       * Assert
       */
      expect(attributeTypeFound).toStrictEqual(attributeTypeExpected);
    });
  });
});
