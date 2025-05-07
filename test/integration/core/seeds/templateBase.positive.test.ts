import { templateBase } from './../../../../dist';

describe('templateBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const templateBaseExpect = {
        templateId: '681b67834825a5b310d57501',
        campaignId: '681b609700e07d78b7c58e0b',
        templateTypeId: '681b67682715b20a05f574ce',
        ownerUserId: '681a061ac6e45110dff9dcad',
        description: 'A base template',
        name: 'template/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const templateBaseFound = { ...templateBase };
      expect(templateBaseFound).toStrictEqual(templateBaseExpect);
    });
  });
});
