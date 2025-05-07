import { hopBase } from '@app-lcs2/core/seeds/hop';

describe('hopBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const hopBaseExpect = {
        hopId: '681a017def8b6fd17c3ff585',
        journeyId: '681a0c9945449fda5d997940',
        resourceId: '681a9b25b50c8526cf5e0d13',
        description: 'A hop beginning from resource/hop/get',
        name: 'hop/base',
        order: 1,
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const hopBaseFound = { ...hopBase };
      expect(hopBaseFound).toStrictEqual(hopBaseExpect);
    });
  });
});
