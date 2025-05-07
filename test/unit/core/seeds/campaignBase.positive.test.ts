import { campaignBase } from '@app-lcs2/core/seeds/campaign';

describe('campaignBase', () => {
  describe('positive', () => {
    test('should contain the expected properties', () => {
      const campaignBaseExpect = {
        campaignId: '681b609700e07d78b7c58e0b',
        campaignTypeId: '681b60a988ece10d00e58b38',
        ownerUserId: '681a061ac6e45110dff9dcad',
        projectId: '681b61150fef05792a09b219',
        description: 'A default (or base) campaign',
        name: 'campaign/base',
        adminStatusId: '681a044bd4546c227ff1305c',
        adminUserId: '681a061ac6e45110dff9dcad',
      };
      const campaignBaseFound = { ...campaignBase };
      expect(campaignBaseFound).toStrictEqual(campaignBaseExpect);
    });
  });
});
