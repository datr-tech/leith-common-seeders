import {
  userSessionModelSchema,
  userSessionModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';
import { model, Schema } from 'mongoose';

export const UserSessionModelMock = model(
  'UserSessionModel',
  new Schema(userSessionModelSchema, userSessionModelSchemaOptions),
);
