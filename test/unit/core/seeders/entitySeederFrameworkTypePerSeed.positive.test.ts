import { seederPerSeed } from '@app-lcs2/core/seeders';
import { frameworkTypeInternal } from '@app-lcs2/core/seeds/frameworkType';
import { FrameworkTypeModelMock } from '@test-lcs2/doubles/mocks/models';

const mockingoose = require('mockingoose');

describe('entitySeederFrameworkTypePerSeed', () => {
  describe('positive', () => {
    test('should return the expected (mock) response', async () => {
      /*
       * Arrange
       */
      const responseExpected = new FrameworkTypeModelMock(frameworkTypeInternal);
      mockingoose(FrameworkTypeModelMock).toReturn(responseExpected, 'save');

      /*
       * Act
       */
      const responseFound = await seederPerSeed({
        model: FrameworkTypeModelMock,
        modelName: 'frameworkTypeModel',
        seed: frameworkTypeInternal,
        seedName: 'frameworkTypeInternal',
        returnSavedModel: true,
      });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
