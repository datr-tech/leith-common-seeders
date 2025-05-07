import { seederPerSeed } from '@app-lcs2/core/seeders';
import { frameworkDatrTech } from '@app-lcs2/core/seeds/framework';
import { FrameworkModelMock } from '@test-lcs2/doubles/mocks/models';

const mockingoose = require('mockingoose');

describe('entitySeederFrameworkPerSeed', () => {
  describe('positive', () => {
    test('should return the expected (mock) response', async () => {
      /*
       * Arrange
       */
      const responseExpected = new FrameworkModelMock(frameworkDatrTech);
      mockingoose(FrameworkModelMock).toReturn(responseExpected, 'save');

      /*
       * Act
       */
      const responseFound = await seederPerSeed({
        model: FrameworkModelMock,
        modelName: 'frameworkModel',
        seed: frameworkDatrTech,
        seedName: 'frameworkDatrTech',
        returnSavedModel: true,
      });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
