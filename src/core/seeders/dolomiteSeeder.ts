import * as hopSeeds from '@app-lcs2/core/seeds/hop';
import * as journeySeeds from '@app-lcs2/core/seeds/journey';
import * as journeyTypeSeeds from '@app-lcs2/core/seeds/journeyType';
import { seederPerModel } from './seederPerModel';

export const dolomiteSeeder = async (HopModel, JourneyModel, JourneyTypeModel) => {
  await seederPerModel({
    model: HopModel,
    modelName: 'hopModel',
    seeds: hopSeeds,
  });

  await seederPerModel({
    model: JourneyModel,
    modelName: 'journeyModel',
    seeds: journeySeeds,
  });

  await seederPerModel({
    model: JourneyTypeModel,
    modelName: 'journeyTypeModel',
    seeds: journeyTypeSeeds,
  });
};
