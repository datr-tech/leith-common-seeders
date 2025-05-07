import * as journeySeeds from '@app-lcs2/core/seeds/journey';
import { dolomiteSeederJourneyPerSeed } from './dolomiteSeederJourneyPerSeed';

export const dolomiteSeederJourney = async (JourneyModel) => {
  const journeySeedNames = Object.keys(journeySeeds);

  for (const journeySeedName of journeySeedNames) {
    const journeySeed = journeySeeds[journeySeedName];
    await dolomiteSeederJourneyPerSeed(JourneyModel, journeySeed, journeySeedName);
  }
};
