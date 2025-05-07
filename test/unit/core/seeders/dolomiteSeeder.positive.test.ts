const status = { status: 'success' };
const hopModelMockSave = jest.fn().mockResolvedValue(status);
const journeyModelMockSave = jest.fn().mockResolvedValue(status);
const journeyTypeModelMockSave = jest.fn().mockResolvedValue(status);

jest.mock('@test-lcs2/doubles/mocks/models/HopModelMock', () => ({
  __esModule: true,
  HopModelMock: jest.fn().mockImplementation(() => {
    return { save: hopModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/JourneyModelMock', () => ({
  __esModule: true,
  JourneyModelMock: jest.fn().mockImplementation(() => {
    return { save: journeyModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/JourneyTypeModelMock', () => ({
  __esModule: true,
  JourneyTypeModelMock: jest.fn().mockImplementation(() => {
    return { save: journeyTypeModelMockSave };
  }),
}));

import { dolomiteSeeder } from '@app-lcs2/core/seeders';
import { HopModelMock } from '@test-lcs2/doubles/mocks/models/HopModelMock';
import { JourneyModelMock } from '@test-lcs2/doubles/mocks/models/JourneyModelMock';
import { JourneyTypeModelMock } from '@test-lcs2/doubles/mocks/models/JourneyTypeModelMock';

describe('dolomiteSeeder', () => {
  describe('positive', () => {
    test('should make the expected number of (mocked) child calls', async () => {
      /*
       * Act
       */
      await dolomiteSeeder(HopModelMock, JourneyModelMock, JourneyTypeModelMock);

      /*
       * Assert
       */
      expect(hopModelMockSave).toHaveBeenCalledTimes(1);
      expect(journeyModelMockSave).toHaveBeenCalledTimes(1);
      expect(journeyTypeModelMockSave).toHaveBeenCalledTimes(1);
    });
  });
});
