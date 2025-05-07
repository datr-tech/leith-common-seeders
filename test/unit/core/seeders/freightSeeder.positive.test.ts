const status = { status: 'success' };
const campaignModelMockSave = jest.fn().mockResolvedValue(status);
const campaignTypeModelMockSave = jest.fn().mockResolvedValue(status);
const projectModelMockSave = jest.fn().mockResolvedValue(status);
const projectTypeModelMockSave = jest.fn().mockResolvedValue(status);
const templateModelMockSave = jest.fn().mockResolvedValue(status);
const templateTypeModelMockSave = jest.fn().mockResolvedValue(status);

jest.mock('@test-lcs2/doubles/mocks/models/CampaignModelMock', () => ({
  __esModule: true,
  CampaignModelMock: jest.fn().mockImplementation(() => {
    return { save: campaignModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/CampaignTypeModelMock', () => ({
  __esModule: true,
  CampaignTypeModelMock: jest.fn().mockImplementation(() => {
    return { save: campaignTypeModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/ProjectModelMock', () => ({
  __esModule: true,
  ProjectModelMock: jest.fn().mockImplementation(() => {
    return { save: projectModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/ProjectTypeModelMock', () => ({
  __esModule: true,
  ProjectTypeModelMock: jest.fn().mockImplementation(() => {
    return { save: projectTypeModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/TemplateModelMock', () => ({
  __esModule: true,
  TemplateModelMock: jest.fn().mockImplementation(() => {
    return { save: templateModelMockSave };
  }),
}));

jest.mock('@test-lcs2/doubles/mocks/models/TemplateTypeModelMock', () => ({
  __esModule: true,
  TemplateTypeModelMock: jest.fn().mockImplementation(() => {
    return { save: templateTypeModelMockSave };
  }),
}));

import { freightSeeder } from '@app-lcs2/core/seeders';
import { CampaignModelMock } from '@test-lcs2/doubles/mocks/models/CampaignModelMock';
import { CampaignTypeModelMock } from '@test-lcs2/doubles/mocks/models/CampaignTypeModelMock';
import { ProjectModelMock } from '@test-lcs2/doubles/mocks/models/ProjectModelMock';
import { ProjectTypeModelMock } from '@test-lcs2/doubles/mocks/models/ProjectTypeModelMock';
import { TemplateModelMock } from '@test-lcs2/doubles/mocks/models/TemplateModelMock';
import { TemplateTypeModelMock } from '@test-lcs2/doubles/mocks/models/TemplateTypeModelMock';

describe('freightSeeder', () => {
  describe('positive', () => {
    test('should make the expected number of (mocked) child calls', async () => {
      /*
       * Act
       */
      await freightSeeder(
        CampaignModelMock,
        CampaignTypeModelMock,
        ProjectModelMock,
        ProjectTypeModelMock,
        TemplateModelMock,
        TemplateTypeModelMock,
      );

      /*
       * Assert
       */
      expect(campaignModelMockSave).toHaveBeenCalledTimes(1);
      expect(campaignTypeModelMockSave).toHaveBeenCalledTimes(1);
      expect(projectModelMockSave).toHaveBeenCalledTimes(1);
      expect(projectTypeModelMockSave).toHaveBeenCalledTimes(1);
      expect(templateModelMockSave).toHaveBeenCalledTimes(1);
      expect(templateTypeModelMockSave).toHaveBeenCalledTimes(1);
    });
  });
});
