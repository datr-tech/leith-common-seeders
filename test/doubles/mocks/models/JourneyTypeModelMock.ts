import {
  journeyTypeModelSchema,
  journeyTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-dolomite';
import { model, Schema } from 'mongoose';

export const JourneyTypeModelMock = model(
  'JourneyTypeModel',
  new Schema(journeyTypeModelSchema, journeyTypeModelSchemaOptions),
);
