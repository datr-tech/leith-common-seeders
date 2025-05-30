import { attributeBase } from './../../../../dist';

describe('attributeBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const attributeBaseExpect = {
        attributeId: '681bf5d3f135748ddb7485e7',
        attributeTypeId: '681bf65ff69614d01dc3746c',
        description: 'A base (or default) attribute',
        name: 'attribute/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const attributeBaseFound = { ...attributeBase };
      expect(attributeBaseFound).toStrictEqual(attributeBaseExpect);
    });
  });
});
