import { dolomiteSeederHopPerSeed } from '@app-lcs2/core/seeders/dolomiteSeeder';
import { hopBase } from '@app-lcs2/core/seeds/hop';
import { HopModelMock } from '@test-lcs2/doubles/mocks/models';

const mockingoose = require('mockingoose');

describe('dolomiteSeederHopPerSeed', () => {
  describe('positive', () => {
    test('should return the expected (mock) response', async () => {
      /*
       * Arrange
       */
      const responseExpected = new HopModelMock(hopBase);
      mockingoose(HopModelMock).toReturn(responseExpected, 'save');

      /*
       * Act
       */
      const responseFound = await dolomiteSeederHopPerSeed(
        HopModelMock,
        hopBase,
        'hopBase',
        true,
      );

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
