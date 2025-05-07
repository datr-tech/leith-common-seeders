import {
  templateTypeModelSchema,
  templateTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';
import { model, Schema } from 'mongoose';

export const TemplateTypeModelMock = model(
  'TemplateTypeModel',
  new Schema(templateTypeModelSchema, templateTypeModelSchemaOptions),
);
