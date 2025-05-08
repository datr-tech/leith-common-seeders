import {
  attributeTypeModelSchema,
  attributeTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-granul8';
import { model, Schema } from 'mongoose';

export const AttributeTypeModelMock = model(
  'AttributeTypeModel',
  new Schema(attributeTypeModelSchema, attributeTypeModelSchemaOptions),
);
