import {
  resourceAttributeModelSchema,
  resourceAttributeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-granul8';
import { model, Schema } from 'mongoose';

export const ResourceAttributeModelMock = model(
  'ResourceAttributeModel',
  new Schema(resourceAttributeModelSchema, resourceAttributeModelSchemaOptions),
);
