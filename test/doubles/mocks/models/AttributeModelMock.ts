import {
  attributeModelSchema,
  attributeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-granul8';
import { model, Schema } from 'mongoose';

export const AttributeModelMock = model(
  'AttributeModel',
  new Schema(attributeModelSchema, attributeModelSchemaOptions),
);
