import {
  frameworkTypeModelSchema,
  frameworkTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

export const FrameworkTypeModelMock = model(
  'FrameworkTypeModel',
  new Schema(frameworkTypeModelSchema, frameworkTypeModelSchemaOptions),
);
