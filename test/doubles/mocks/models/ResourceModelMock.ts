import {
  resourceModelSchema,
  resourceModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

export const ResourceModelMock = model(
  'ResourceModel',
  new Schema(resourceModelSchema, resourceModelSchemaOptions),
);
