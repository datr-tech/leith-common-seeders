import { seederPerSeed } from '@app-lcs2/core/seeders';
import { serviceDolomite } from '@app-lcs2/core/seeds/service';
import { ServiceModelMock } from '@test-lcs2/doubles/mocks/models';

const mockingoose = require('mockingoose');

describe('entitySeederServicePerSeed', () => {
  describe('positive', () => {
    test('should return the expected (mock) response', async () => {
      /*
       * Arrange
       */
      const responseExpected = new ServiceModelMock(serviceDolomite);
      mockingoose(ServiceModelMock).toReturn(responseExpected, 'save');

      /*
       * Act
       */
      const responseFound = await seederPerSeed({
        model: ServiceModelMock,
        modelName: 'serviceModel',
        seed: serviceDolomite,
        seedName: 'serviceDolomite',
        returnSavedModel: true,
      });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
