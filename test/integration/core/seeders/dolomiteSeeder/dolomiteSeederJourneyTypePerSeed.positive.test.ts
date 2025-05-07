import { JourneyTypeModelMock } from '@test-lcs2/doubles/mocks/models';
import { dolomiteSeederJourneyTypePerSeed, journeyTypeBase } from './../../../../../dist';

const mockingoose = require('mockingoose');

describe('dolomiteSeederJourneyTypePerSeed', () => {
  describe('positive', () => {
    test('should return the expected (mock) response', async () => {
      /*
       * Arrange
       */
      const responseExpected = new JourneyTypeModelMock(journeyTypeBase);
      mockingoose(JourneyTypeModelMock).toReturn(responseExpected, 'save');

      /*
       * Act
       */
      const responseFound = await dolomiteSeederJourneyTypePerSeed(
        JourneyTypeModelMock,
        journeyTypeBase,
        'journeyTypeBase',
        true,
      );

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
