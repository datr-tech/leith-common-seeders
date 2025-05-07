import { seederPerSeed } from './seederPerSeed';

export const seederPerModel = async ({ model, modelName, seeds }) => {
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
    });
  }
};
