import { seederPerSeed } from '@app-lcs2/core/seeders';
import { resourceHopDelete } from '@app-lcs2/core/seeds/resource';
import { ResourceModelMock } from '@test-lcs2/doubles/mocks/models';

const mockingoose = require('mockingoose');

describe('entitySeederResourcePerSeed', () => {
  describe('positive', () => {
    test('should return the expected (mock) response', async () => {
      /*
       * Arrange
       */
      const responseExpected = new ResourceModelMock(resourceHopDelete);
      mockingoose(ResourceModelMock).toReturn(responseExpected, 'save');

      /*
       * Act
       */
      const responseFound = await seederPerSeed({
        model: ResourceModelMock,
        modelName: 'resourceModel',
        seed: resourceHopDelete,
        seedName: 'resourceHopDelete',
        returnSavedModel: true,
      });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
