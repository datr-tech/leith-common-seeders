import { seederPerSeed } from '@app-lcs2/core/seeders';
import { endpointHopRest } from '@app-lcs2/core/seeds/endpoint';
import { EndpointModelMock } from '@test-lcs2/doubles/mocks/models';

const mockingoose = require('mockingoose');

describe('entitySeederEndpointPerSeed', () => {
  describe('positive', () => {
    test('should return the expected (mock) response', async () => {
      /*
       * Arrange
       */
      const responseExpected = new EndpointModelMock(endpointHopRest);
      mockingoose(EndpointModelMock).toReturn(responseExpected, 'save');

      /*
       * Act
       */
      const responseFound = await seederPerSeed({
        model: EndpointModelMock,
        modelName: 'endpointModel',
        seed: endpointHopRest,
        seedName: 'endpointHopRest',
        returnSavedModel: true,
      });

      /*
       * Assert
       */
      expect(responseFound).toEqual(responseExpected);
    });
  });
});
