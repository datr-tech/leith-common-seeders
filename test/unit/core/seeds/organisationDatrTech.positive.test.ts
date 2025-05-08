import { organisationDatrTech } from '@app-lcs2/core/seeds/organisation';

describe('organisationDatrTech', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const organisationExpected = {
        organisationId: '681b6491451661fa673e4fc6',
        frameworkId: '681a8ff8a30b5cecdb2a33ce',
        organisationTypeId: '681b65c249beb3041de8b88a',
        description: 'The datr.tech organisation',
        name: 'organisation/datr.tech',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const organisationFound = { ...organisationDatrTech };

      /*
       * Assert
       */
      expect(organisationFound).toStrictEqual(organisationExpected);
    });
  });
});
