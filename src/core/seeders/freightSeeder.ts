import * as campaignSeeds from '@app-lcs2/core/seeds/campaign';
import * as campaignTypeSeeds from '@app-lcs2/core/seeds/campaignType';
import * as projectSeeds from '@app-lcs2/core/seeds/project';
import * as projectTypeSeeds from '@app-lcs2/core/seeds/projectType';
import * as templateSeeds from '@app-lcs2/core/seeds/template';
import * as templateTypeSeeds from '@app-lcs2/core/seeds/templateType';
import { seederPerModel } from './seederPerModel';

export const freightSeeder = async (
  CampaignModel,
  CampaignTypeModel,
  ProjectModel,
  ProjectTypeModel,
  TemplateModel,
  TemplateTypeModel,
) => {
  await seederPerModel({
    model: CampaignModel,
    modelName: 'campaignModel',
    seeds: campaignSeeds,
  });

  await seederPerModel({
    model: CampaignTypeModel,
    modelName: 'campaignTypeModel',
    seeds: campaignTypeSeeds,
  });

  await seederPerModel({
    model: ProjectModel,
    modelName: 'projectModel',
    seeds: projectSeeds,
  });

  await seederPerModel({
    model: ProjectTypeModel,
    modelName: 'projectTypeModel',
    seeds: projectTypeSeeds,
  });

  await seederPerModel({
    model: TemplateModel,
    modelName: 'templateModel',
    seeds: templateSeeds,
  });

  await seederPerModel({
    model: TemplateTypeModel,
    modelName: 'templateTypeModel',
    seeds: templateTypeSeeds,
  });
};
