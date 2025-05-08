import { processBase } from './../../../../dist';

describe('processBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const processExpected = {
        processId: '681c56ae695d446f8c137bbe',
        frameworkId: '681a8ff8a30b5cecdb2a33ce',
        journeyId: '681a0c9945449fda5d997940',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const processFound = { ...processBase };

      /*
       * Assert
       */
      expect(processFound).toStrictEqual(processExpected);
    });
  });
});
