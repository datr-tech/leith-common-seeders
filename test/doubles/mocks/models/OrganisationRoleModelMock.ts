import {
  organisationRoleModelSchema,
  organisationRoleModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';
import { model, Schema } from 'mongoose';

export const OrganisationRoleModelMock = model(
  'OrganisationRoleModel',
  new Schema(organisationRoleModelSchema, organisationRoleModelSchemaOptions),
);
