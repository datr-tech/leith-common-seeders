import { journeyBase } from './../../../../dist';

describe('journeyBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const journeyBaseExpect = {
        journeyId: '681a0c9945449fda5d997940',
        frameworkId: '681a8ff8a30b5cecdb2a33ce',
        journeyTypeId: '681a0bece67fb30d1d10c9ca',
        description: 'A base journey',
        name: 'journey/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const journeyBaseFound = { ...journeyBase };
      expect(journeyBaseFound).toStrictEqual(journeyBaseExpect);
    });
  });
});
