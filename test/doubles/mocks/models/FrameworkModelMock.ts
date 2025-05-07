import {
  frameworkModelSchema,
  frameworkModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

export const FrameworkModelMock = model(
  'FrameworkModel',
  new Schema(frameworkModelSchema, frameworkModelSchemaOptions),
);
