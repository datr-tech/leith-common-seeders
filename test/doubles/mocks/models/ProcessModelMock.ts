import {
  processModelSchema,
  processModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-proc';
import { model, Schema } from 'mongoose';

export const ProcessModelMock = model(
  'ProcessModel',
  new Schema(processModelSchema, processModelSchemaOptions),
);
