import {
  organisationTypeModelSchema,
  organisationTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-persona';
import { model, Schema } from 'mongoose';

export const OrganisationTypeModelMock = model(
  'OrganisationTypeModel',
  new Schema(organisationTypeModelSchema, organisationTypeModelSchemaOptions),
);
