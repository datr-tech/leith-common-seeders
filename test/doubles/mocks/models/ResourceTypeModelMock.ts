import {
  resourceTypeModelSchema,
  resourceTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

export const ResourceTypeModelMock = model(
  'ResourceTypeModel',
  new Schema(resourceTypeModelSchema, resourceTypeModelSchemaOptions),
);
