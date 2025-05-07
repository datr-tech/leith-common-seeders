import { journeyTypeBase } from './../../../../dist';

describe('journeyTypeBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const journeyTypeBaseExpect = {
        journeyTypeId: '681a0bece67fb30d1d10c9ca',
        description: 'A base journey type',
        name: 'journeyType/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const journeyTypeBaseFound = { ...journeyTypeBase };
      expect(journeyTypeBaseFound).toStrictEqual(journeyTypeBaseExpect);
    });
  });
});
