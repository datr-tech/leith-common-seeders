import {
  threadModelSchema,
  threadModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-proc';
import { model, Schema } from 'mongoose';

export const ThreadModelMock = model(
  'ThreadModel',
  new Schema(threadModelSchema, threadModelSchemaOptions),
);
