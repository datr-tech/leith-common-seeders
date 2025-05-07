import { dolomiteSeederJourneyPerSeed } from '@app-lcs2/core/seeders/dolomiteSeeder';
import { journeyBase } from '@app-lcs2/core/seeds/journey';
import { JourneyModelMock } from '@test-lcs2/doubles/mocks/models';

const mockingoose = require('mockingoose');

describe('dolomiteSeederJourneyPerSeed', () => {
  describe('positive', () => {
    test('should return the expected (mock) response', async () => {
      /*
       * Arrange
       */
      const responseExpected = new JourneyModelMock(journeyBase);
      mockingoose(JourneyModelMock).toReturn(responseExpected, 'save');

      /*
       * Act
       */
      const responseFound = await dolomiteSeederJourneyPerSeed(
        JourneyModelMock,
        journeyBase,
        'journeyBase',
        true,
      );

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
