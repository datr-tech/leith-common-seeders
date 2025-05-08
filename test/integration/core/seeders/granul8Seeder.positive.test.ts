const status = { status: 'success' };
const attributeModelMockSave = jest.fn().mockResolvedValue(status);
const attributeTypeModelMockSave = jest.fn().mockResolvedValue(status);
const resourceAttributeModelMockSave = jest.fn().mockResolvedValue(status);
const userAttributeModelMockSave = jest.fn().mockResolvedValue(status);

jest.mock('@test-lcs2/doubles/mocks/models/AttributeModelMock', () => ({
  __esModule: true,
  AttributeModelMock: jest.fn().mockImplementation(() => {
    return { save: attributeModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/AttributeTypeModelMock', () => ({
  __esModule: true,
  AttributeTypeModelMock: jest.fn().mockImplementation(() => {
    return { save: attributeTypeModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/ResourceAttributeModelMock', () => ({
  __esModule: true,
  ResourceAttributeModelMock: jest.fn().mockImplementation(() => {
    return { save: resourceAttributeModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/UserAttributeModelMock', () => ({
  __esModule: true,
  UserAttributeModelMock: jest.fn().mockImplementation(() => {
    return { save: userAttributeModelMockSave };
  }),
}));

import { AttributeModelMock } from '@test-lcs2/doubles/mocks/models/AttributeModelMock';
import { AttributeTypeModelMock } from '@test-lcs2/doubles/mocks/models/AttributeTypeModelMock';
import { ResourceAttributeModelMock } from '@test-lcs2/doubles/mocks/models/ResourceAttributeModelMock';
import { UserAttributeModelMock } from '@test-lcs2/doubles/mocks/models/UserAttributeModelMock';
import { granul8Seeder } from './../../../../dist';

describe('granul8Seeder', () => {
  describe('positive', () => {
    test('should make the expected number of (mocked) child calls', async () => {
      /*
       * Act
       */
      await granul8Seeder(
        AttributeModelMock,
        AttributeTypeModelMock,
        ResourceAttributeModelMock,
        UserAttributeModelMock,
      );

      /*
       * Assert
       */
      expect(attributeModelMockSave).toHaveBeenCalledTimes(1);
      expect(attributeTypeModelMockSave).toHaveBeenCalledTimes(1);
      expect(resourceAttributeModelMockSave).toHaveBeenCalledTimes(1);
      expect(userAttributeModelMockSave).toHaveBeenCalledTimes(1);
    });
  });
});
