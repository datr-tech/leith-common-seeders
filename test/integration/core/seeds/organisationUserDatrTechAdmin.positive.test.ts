import { organisationUserDatrTechAdmin } from './../../../../dist';

describe('organisationUserDatrTechAdmin', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      /*
       * Arrange
       */
      const organisationUserExpected = {
        organisationUserId: '681c4aad98a97a956676144e',
        organisationId: '681b6491451661fa673e4fc6',
        userId: '681a061ac6e45110dff9dcad',
        description: 'The datr.tech admin organisation user',
        name: 'organisationUser/datr.tech/admin',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };

      /*
       * Act
       */
      const organisationUserFound = { ...organisationUserDatrTechAdmin };

      /*
       * Assert
       */
      expect(organisationUserFound).toStrictEqual(organisationUserExpected);
    });
  });
});
