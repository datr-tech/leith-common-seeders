import * as endpointSeeds from '@app-lcs2/core/seeds/endpoint';
import * as endpointTypeSeeds from '@app-lcs2/core/seeds/endpointType';
import * as frameworkSeeds from '@app-lcs2/core/seeds/framework';
import * as frameworkTypeSeeds from '@app-lcs2/core/seeds/frameworkType';
import * as resourceSeeds from '@app-lcs2/core/seeds/resource';
import * as resourceTypeSeeds from '@app-lcs2/core/seeds/resourceType';
import * as serviceSeeds from '@app-lcs2/core/seeds/service';
import { seederPerModel } from './seederPerModel';

export const entitySeeder = async (
  EndpointModel,
  EndpointTypeModel,
  FrameworkModel,
  FrameworkTypeModel,
  ResourceModel,
  ResourceTypeModel,
  ServiceModel,
) => {
  await seederPerModel({
    model: EndpointModel,
    modelName: 'endpointModel',
    seeds: endpointSeeds,
  });

  await seederPerModel({
    model: EndpointTypeModel,
    modelName: 'endpointTypeModel',
    seeds: endpointTypeSeeds,
  });

  await seederPerModel({
    model: FrameworkModel,
    modelName: 'frameworkModel',
    seeds: frameworkSeeds,
  });

  await seederPerModel({
    model: FrameworkTypeModel,
    modelName: 'frameworkTypeModel',
    seeds: frameworkTypeSeeds,
  });

  await seederPerModel({
    model: ResourceModel,
    modelName: 'resourceModel',
    seeds: resourceSeeds,
  });

  await seederPerModel({
    model: ResourceTypeModel,
    modelName: 'resourceTypeModel',
    seeds: resourceTypeSeeds,
  });

  await seederPerModel({
    model: ServiceModel,
    modelName: 'serviceModel',
    seeds: serviceSeeds,
  });
};
