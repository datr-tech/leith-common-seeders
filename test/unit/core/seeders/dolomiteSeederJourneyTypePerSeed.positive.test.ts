import { seederPerSeed } from '@app-lcs2/core/seeders';
import { journeyTypeBase } from '@app-lcs2/core/seeds/journeyType';
import { JourneyTypeModelMock } from '@test-lcs2/doubles/mocks/models';

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
      const responseFound = await seederPerSeed({
        model: JourneyTypeModelMock,
        modelName: 'journeyTypeModel',
        seed: journeyTypeBase,
        seedName: 'journeyTypeBase',
        returnSavedModel: true,
      });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
