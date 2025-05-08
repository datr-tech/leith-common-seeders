import { seederPerSeed } from './seederPerSeed';

export const seederPerModel = async ({ model, modelName, seeds, verbose = false }) => {
  if (!seeds || typeof seeds !== 'object') {
    throw new TypeError('seeds: invalid');
  }

  const seedNames = Object.keys(seeds);

  for (const seedName of seedNames) {
    const seed = seeds[seedName];
    const returnSavedModel = false;
    await seederPerSeed({
      model,
      modelName,
      seed,
      seedName,
      returnSavedModel,
      verbose,
    });
  }
};
