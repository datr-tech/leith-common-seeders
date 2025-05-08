import {
  userModelSchema,
  userModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';
import { model, Schema } from 'mongoose';

export const UserModelMock = model(
  'UserModel',
  new Schema(userModelSchema, userModelSchemaOptions),
);
