import { resourceAttributeHopGetBase } from '@app-lcs2/core/seeds/resourceAttribute';

describe('resourceAttributeHopGetBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const resourceAttributeExpect = {
        resourceAttributeId: '681bf7c14078454c1644b843',
        attributeId: '681bf5d3f135748ddb7485e7',
        resourceId: '681a9b25b50c8526cf5e0d13',
        description: 'A base (or default) attribute for the hop get resource',
        name: 'resourceAttribute/hop/get/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const resourceAttributeFound = { ...resourceAttributeHopGetBase };
      expect(resourceAttributeFound).toStrictEqual(resourceAttributeExpect);
    });
  });
});
