import { seederPerSeed } from '@app-lcs2/core/seeders';
import { resourceTypeDelete } from '@app-lcs2/core/seeds/resourceType';
import { ResourceTypeModelMock } from '@test-lcs2/doubles/mocks/models';

const mockingoose = require('mockingoose');

describe('entitySeederResourceTypePerSeed', () => {
  describe('positive', () => {
    test('should return the expected (mock) response', async () => {
      /*
       * Arrange
       */
      const responseExpected = new ResourceTypeModelMock(resourceTypeDelete);
      mockingoose(ResourceTypeModelMock).toReturn(responseExpected, 'save');

      /*
       * Act
       */
      const responseFound = await seederPerSeed({
        model: ResourceTypeModelMock,
        modelName: 'resourceTypeModel',
        seed: resourceTypeDelete,
        seedName: 'resourceTypeDelete',
        returnSavedModel: true,
      });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
