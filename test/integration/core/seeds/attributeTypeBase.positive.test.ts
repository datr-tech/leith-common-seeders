import { attributeTypeBase } from './../../../../dist';

describe('attributeTypeBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const attributeTypeBaseExpect = {
        attributeTypeId: '681bf65ff69614d01dc3746c',
        description: 'A base (or default) attribute type',
        name: 'attributeType/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const attributeTypeBaseFound = { ...attributeTypeBase };
      expect(attributeTypeBaseFound).toStrictEqual(attributeTypeBaseExpect);
    });
  });
});
