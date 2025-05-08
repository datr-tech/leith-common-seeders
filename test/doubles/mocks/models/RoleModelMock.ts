import {
  roleModelSchema,
  roleModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';
import { model, Schema } from 'mongoose';

export const RoleModelMock = model(
  'RoleModel',
  new Schema(roleModelSchema, roleModelSchemaOptions),
);
