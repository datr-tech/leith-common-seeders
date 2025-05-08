import * as processSeeds from '@app-lcs2/core/seeds/process';
import * as threadSeeds from '@app-lcs2/core/seeds/thread';

import { seederPerModel } from './seederPerModel';

export const procSeeder = async (ProcessModel, ThreadModel, verbose = false) => {
  await seederPerModel({
    model: ProcessModel,
    modelName: 'processModel',
    seeds: processSeeds,
    verbose,
  });

  await seederPerModel({
    model: ThreadModel,
    modelName: 'threadModel',
    seeds: threadSeeds,
    verbose,
  });
};
