import { threadBase } from './../../../../dist';

describe('threadBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const threadExpected = {
        threadId: '681c57eea1e012c8279d7603',
        processId: '681c56ae695d446f8c137bbe',
        hopId: '681a017def8b6fd17c3ff585',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const threadFound = { ...threadBase };

      /*
       * Assert
       */
      expect(threadFound).toStrictEqual(threadExpected);
    });
  });
});
