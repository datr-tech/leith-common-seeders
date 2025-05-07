import {
  templateModelSchema,
  templateModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';
import { model, Schema } from 'mongoose';

export const TemplateModelMock = model(
  'TemplateModel',
  new Schema(templateModelSchema, templateModelSchemaOptions),
);
