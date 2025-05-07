import { campaignTypeBase } from '@app-lcs2/core/seeds/campaignType';

describe('campaignTypeBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const campaignTypeBaseExpect = {
        campaignTypeId: '681b60a988ece10d00e58b38',
        description: 'A default (or base) campaign type',
        name: 'campaignType/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const campaignTypeBaseFound = { ...campaignTypeBase };
      expect(campaignTypeBaseFound).toStrictEqual(campaignTypeBaseExpect);
    });
  });
});
