import { projectBase } from '@app-lcs2/core/seeds/project';

describe('projectBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const projectBaseExpect = {
        projectId: '681b61150fef05792a09b219',
        projectTypeId: '681b641135cf8adaa1a628d1',
        organisationId: '681b6491451661fa673e4fc6',
        ownerUserId: '681a061ac6e45110dff9dcad',
        description: 'The base datr.tech project',
        name: 'project/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const projectBaseFound = { ...projectBase };
      expect(projectBaseFound).toStrictEqual(projectBaseExpect);
    });
  });
});
