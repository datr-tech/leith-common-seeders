import * as journeyTypeSeeds from '@app-lcs2/core/seeds/journeyType';
import { dolomiteSeederJourneyTypePerSeed } from './dolomiteSeederJourneyTypePerSeed';

export const dolomiteSeederJourneyType = async (JourneyTypeModel) => {
  const journeyTypeSeedNames = Object.keys(journeyTypeSeeds);

  for (const journeyTypeSeedName of journeyTypeSeedNames) {
    const journeyTypeSeed = journeyTypeSeeds[journeyTypeSeedName];
    await dolomiteSeederJourneyTypePerSeed(
      JourneyTypeModel,
      journeyTypeSeed,
      journeyTypeSeedName,
    );
  }
};
