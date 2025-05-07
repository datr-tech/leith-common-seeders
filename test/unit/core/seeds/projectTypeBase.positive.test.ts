import { projectTypeBase } from '@app-lcs2/core/seeds/projectType';

describe('projectTypeBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const projectTypeBaseExpect = {
        projectTypeId: '681b641135cf8adaa1a628d1',
        description: 'A base project type',
        name: 'projectType/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const projectTypeBaseFound = { ...projectTypeBase };
      expect(projectTypeBaseFound).toStrictEqual(projectTypeBaseExpect);
    });
  });
});
