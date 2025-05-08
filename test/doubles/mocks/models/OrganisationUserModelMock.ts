import {
  organisationUserModelSchema,
  organisationUserModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';
import { model, Schema } from 'mongoose';

export const OrganisationUserModelMock = model(
  'OrganisationUserModel',
  new Schema(organisationUserModelSchema, organisationUserModelSchemaOptions),
);
