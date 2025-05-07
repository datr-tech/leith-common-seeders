import {
  serviceModelSchema,
  serviceModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-entity';
import { model, Schema } from 'mongoose';

export const ServiceModelMock = model(
  'ServiceModel',
  new Schema(serviceModelSchema, serviceModelSchemaOptions),
);
