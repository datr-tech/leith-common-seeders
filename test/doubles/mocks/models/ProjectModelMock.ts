import {
  projectModelSchema,
  projectModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';
import { model, Schema } from 'mongoose';

export const ProjectModelMock = model(
  'ProjectModel',
  new Schema(projectModelSchema, projectModelSchemaOptions),
);
