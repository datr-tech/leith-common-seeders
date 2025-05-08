import {
  userTypeModelSchema,
  userTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';
import { model, Schema } from 'mongoose';

export const UserTypeModelMock = model(
  'UserTypeModel',
  new Schema(userTypeModelSchema, userTypeModelSchemaOptions),
);
