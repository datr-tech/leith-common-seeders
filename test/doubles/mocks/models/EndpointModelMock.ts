import {
  endpointModelSchema,
  endpointModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

export const EndpointModelMock = model(
  'EndpointModel',
  new Schema(endpointModelSchema, endpointModelSchemaOptions),
);
