import {
  campaignTypeModelSchema,
  campaignTypeModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';
import { model, Schema } from 'mongoose';

export const CampaignTypeModelMock = model(
  'CampaignTypeModel',
  new Schema(campaignTypeModelSchema, campaignTypeModelSchemaOptions),
);
