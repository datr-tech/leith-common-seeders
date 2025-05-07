import { seederPerSeed } from '@app-lcs2/core/seeders';
import { endpointTypeRest } from '@app-lcs2/core/seeds/endpointType';
import { EndpointTypeModelMock } from '@test-lcs2/doubles/mocks/models';

const mockingoose = require('mockingoose');

describe('entitySeederEndpointTypePerSeed', () => {
  describe('positive', () => {
    test('should return the expected (mock) response', async () => {
      /*
       * Arrange
       */
      const responseExpected = new EndpointTypeModelMock(endpointTypeRest);
      mockingoose(EndpointTypeModelMock).toReturn(responseExpected, 'save');

      /*
       * Act
       */
      const responseFound = await seederPerSeed({
        model: EndpointTypeModelMock,
        modelName: 'endpointTypeModel',
        seed: endpointTypeRest,
        seedName: 'endpointTypeRest',
        returnSavedModel: true,
      });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
