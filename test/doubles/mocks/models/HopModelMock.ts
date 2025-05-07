import {
  hopModelSchema,
  hopModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-dolomite';
import { model, Schema } from 'mongoose';

export const HopModelMock = model(
  'HopModel',
  new Schema(hopModelSchema, hopModelSchemaOptions),
);
