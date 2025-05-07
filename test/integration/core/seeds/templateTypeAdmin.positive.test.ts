import { templateTypeBase } from './../../../../dist';

describe('templateTypeBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const templateTypeBaseExpect = {
        templateTypeId: '681b67682715b20a05f574ce',
        description: 'A base template type',
        name: 'templateType/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const templateTypeBaseFound = { ...templateTypeBase };
      expect(templateTypeBaseFound).toStrictEqual(templateTypeBaseExpect);
    });
  });
});
