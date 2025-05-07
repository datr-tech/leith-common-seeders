import {
  journeyModelSchema,
  journeyModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-dolomite';
import { model, Schema } from 'mongoose';

export const JourneyModelMock = model(
  'JourneyModel',
  new Schema(journeyModelSchema, journeyModelSchemaOptions),
);
