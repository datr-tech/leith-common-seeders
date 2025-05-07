import {
  endpointTypeModelSchema,
  endpointTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

export const EndpointTypeModelMock = model(
  'EndpointTypeModel',
  new Schema(endpointTypeModelSchema, endpointTypeModelSchemaOptions),
);
