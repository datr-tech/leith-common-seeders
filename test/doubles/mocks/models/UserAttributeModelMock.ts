import {
  userAttributeModelSchema,
  userAttributeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-granul8';
import { model, Schema } from 'mongoose';

export const UserAttributeModelMock = model(
  'UserAttributeModel',
  new Schema(userAttributeModelSchema, userAttributeModelSchemaOptions),
);
