import { journeyTypeBase } from '@app-lcs2/core/seeds/journeyType';

describe('journeyTypeBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const journeyTypeExpected = {
        journeyTypeId: '681a0bece67fb30d1d10c9ca',
        description: 'A base journey type',
        name: 'journeyType/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const journeyTypeFound = { ...journeyTypeBase };
      expect(journeyTypeFound).toStrictEqual(journeyTypeExpected);
    });
  });
});
