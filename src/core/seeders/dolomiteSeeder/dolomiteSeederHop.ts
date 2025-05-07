import * as hopSeeds from '@app-lcs2/core/seeds/hop';
import { dolomiteSeederHopPerSeed } from './dolomiteSeederHopPerSeed';

export const dolomiteSeederHop = async (HopModel) => {
  const hopSeedNames = Object.keys(hopSeeds);

  for (const hopSeedName of hopSeedNames) {
    const hopSeed = hopSeeds[hopSeedName];
    await dolomiteSeederHopPerSeed(HopModel, hopSeed, hopSeedName);
  }
};
