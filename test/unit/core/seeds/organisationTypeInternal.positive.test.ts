import { organisationTypeInternal } from '@app-lcs2/core/seeds/organisationType';

describe('organisationTypeInternal', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const organisationTypeExpected = {
        organisationTypeId: '681b65c249beb3041de8b88a',
        description: 'An internal organisation type',
        name: 'organisationType/internal',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const organisationTypeFound = { ...organisationTypeInternal };
      expect(organisationTypeFound).toStrictEqual(organisationTypeExpected);
    });
  });
});
