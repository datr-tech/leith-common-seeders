import {
  organisationModelSchema,
  organisationModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';
import { model, Schema } from 'mongoose';

export const OrganisationModelMock = model(
  'OrganisationModel',
  new Schema(organisationModelSchema, organisationModelSchemaOptions),
);
