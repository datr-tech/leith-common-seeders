import * as attributeSeeds from '@app-lcs2/core/seeds/attribute';
import * as attributeTypeSeeds from '@app-lcs2/core/seeds/attributeType';
import * as resourceAttributeSeeds from '@app-lcs2/core/seeds/resourceAttribute';
import * as userAttributeSeeds from '@app-lcs2/core/seeds/userAttribute';
import { seederPerModel } from './seederPerModel';

export const granul8Seeder = async (
  AttributeModel,
  AttributeTypeModel,
  ResourceAttributeModel,
  UserAttributeModel,
) => {
  await seederPerModel({
    model: AttributeModel,
    modelName: 'attributeModel',
    seeds: attributeSeeds,
  });

  await seederPerModel({
    model: AttributeTypeModel,
    modelName: 'attributeTypeModel',
    seeds: attributeTypeSeeds,
  });

  await seederPerModel({
    model: ResourceAttributeModel,
    modelName: 'resourceAttributeModel',
    seeds: resourceAttributeSeeds,
  });

  await seederPerModel({
    model: UserAttributeModel,
    modelName: 'userAttributeModel',
    seeds: userAttributeSeeds,
  });
};
