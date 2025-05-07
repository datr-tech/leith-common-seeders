import {
  campaignModelSchema,
  campaignModelSchemaOptions,
} from '@datr.tech/parcel-model-schemas-freight';
import { model, Schema } from 'mongoose';

export const CampaignModelMock = model(
  'CampaignModel',
  new Schema(campaignModelSchema, campaignModelSchemaOptions),
);
