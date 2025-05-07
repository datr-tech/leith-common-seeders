import {
  projectTypeModelSchema,
  projectTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';
import { model, Schema } from 'mongoose';

export const ProjectTypeModelMock = model(
  'ProjectTypeModel',
  new Schema(projectTypeModelSchema, projectTypeModelSchemaOptions),
);
