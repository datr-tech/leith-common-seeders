import { organisationTypeExternal } from '@app-lcs2/core/seeds/organisationType';

describe('organisationTypeExternal', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const organisationTypeExpected = {
        organisationTypeId: '681c0d336ea6e1417aac51a8',
        description: 'An external organisation type',
        name: 'organisationType/external',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const organisationTypeFound = { ...organisationTypeExternal };
      expect(organisationTypeFound).toStrictEqual(organisationTypeExpected);
    });
  });
});
