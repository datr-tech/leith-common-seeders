const status = { status: 'success' };
const processModelMockSave = jest.fn().mockResolvedValue(status);
const threadModelMockSave = jest.fn().mockResolvedValue(status);

jest.mock('@test-lcs2/doubles/mocks/models/ProcessModelMock', () => ({
  __esModule: true,
  ProcessModelMock: jest.fn().mockImplementation(() => {
    return { save: processModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/ThreadModelMock', () => ({
  __esModule: true,
  ThreadModelMock: jest.fn().mockImplementation(() => {
    return { save: threadModelMockSave };
  }),
}));

import { ProcessModelMock } from '@test-lcs2/doubles/mocks/models/ProcessModelMock';
import { ThreadModelMock } from '@test-lcs2/doubles/mocks/models/ThreadModelMock';

import { procSeeder } from '@app-lcs2/core/seeders';

describe('procSeeder', () => {
  describe('positive', () => {
    test('should make the expected number of (mocked) child calls', async () => {
      /*
       * Act
       */
      await procSeeder(ProcessModelMock, ThreadModelMock);

      /*
       * Assert
       */
      expect(processModelMockSave).toHaveBeenCalledTimes(1);
      expect(threadModelMockSave).toHaveBeenCalledTimes(1);
    });
  });
});
