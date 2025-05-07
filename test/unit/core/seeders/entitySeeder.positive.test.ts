const status = { status: 'success' };
const endpointModelMockSave = jest.fn().mockResolvedValue(status);
const endpointTypeModelMockSave = jest.fn().mockResolvedValue(status);
const frameworkModelMockSave = jest.fn().mockResolvedValue(status);
const frameworkTypeModelMockSave = jest.fn().mockResolvedValue(status);
const resourceModelMockSave = jest.fn().mockResolvedValue(status);
const resourceTypeModelMockSave = jest.fn().mockResolvedValue(status);
const serviceModelMockSave = jest.fn().mockResolvedValue(status);

jest.mock('@test-lcs2/doubles/mocks/models/EndpointModelMock', () => ({
  __esModule: true,
  EndpointModelMock: jest.fn().mockImplementation(() => {
    return { save: endpointModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/EndpointTypeModelMock', () => ({
  __esModule: true,
  EndpointTypeModelMock: jest.fn().mockImplementation(() => {
    return { save: endpointTypeModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/FrameworkModelMock', () => ({
  __esModule: true,
  FrameworkModelMock: jest.fn().mockImplementation(() => {
    return { save: frameworkModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/FrameworkTypeModelMock', () => ({
  __esModule: true,
  FrameworkTypeModelMock: jest.fn().mockImplementation(() => {
    return { save: frameworkTypeModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/ResourceModelMock', () => ({
  __esModule: true,
  ResourceModelMock: jest.fn().mockImplementation(() => {
    return { save: resourceModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/ResourceTypeModelMock', () => ({
  __esModule: true,
  ResourceTypeModelMock: jest.fn().mockImplementation(() => {
    return { save: resourceTypeModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/ServiceModelMock', () => ({
  __esModule: true,
  ServiceModelMock: jest.fn().mockImplementation(() => {
    return { save: serviceModelMockSave };
  }),
}));

import { entitySeeder } from '@app-lcs2/core/seeders';
import { EndpointModelMock } from '@test-lcs2/doubles/mocks/models/EndpointModelMock';
import { EndpointTypeModelMock } from '@test-lcs2/doubles/mocks/models/EndpointTypeModelMock';
import { FrameworkModelMock } from '@test-lcs2/doubles/mocks/models/FrameworkModelMock';
import { FrameworkTypeModelMock } from '@test-lcs2/doubles/mocks/models/FrameworkTypeModelMock';
import { ResourceModelMock } from '@test-lcs2/doubles/mocks/models/ResourceModelMock';
import { ResourceTypeModelMock } from '@test-lcs2/doubles/mocks/models/ResourceTypeModelMock';
import { ServiceModelMock } from '@test-lcs2/doubles/mocks/models/ServiceModelMock';

describe('entitySeeder', () => {
  describe('positive', () => {
    test('should make the expected number of (mocked) child calls', async () => {
      /*
       * Act
       */
      await entitySeeder(
        EndpointModelMock,
        EndpointTypeModelMock,
        FrameworkModelMock,
        FrameworkTypeModelMock,
        ResourceModelMock,
        ResourceTypeModelMock,
        ServiceModelMock,
      );

      /*
       * Assert
       */
      expect(endpointModelMockSave).toHaveBeenCalledTimes(2);
      expect(endpointTypeModelMockSave).toHaveBeenCalledTimes(1);
      expect(frameworkModelMockSave).toHaveBeenCalledTimes(1);
      expect(frameworkTypeModelMockSave).toHaveBeenCalledTimes(1);
      expect(resourceModelMockSave).toHaveBeenCalledTimes(2);
      expect(resourceTypeModelMockSave).toHaveBeenCalledTimes(4);
      expect(serviceModelMockSave).toHaveBeenCalledTimes(6);
    });
  });
});
