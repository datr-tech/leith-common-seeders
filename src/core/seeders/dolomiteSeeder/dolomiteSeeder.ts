import { dolomiteSeederHop } from './dolomiteSeederHop';
import { dolomiteSeederJourney } from './dolomiteSeederJourney';
import { dolomiteSeederJourneyType } from './dolomiteSeederJourneyType';

export const dolomiteSeeder = async (HopModel, JourneyModel, JourneyTypeModel) => {
  await dolomiteSeederHop(HopModel);
  await dolomiteSeederJourney(JourneyModel);
  await dolomiteSeederJourneyType(JourneyTypeModel);
};
