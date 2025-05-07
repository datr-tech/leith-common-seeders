import { modelSaveOptions } from '@app-lcs2/config';

export const seederPerSeed = async ({
  model,
  modelName,
  seed,
  seedName,
  returnSavedModel = false,
}) => {
  const doc = new model(seed);

  if (!doc) {
    throw new Error(`${modelName} (${seedName}): invalid`);
  }

  const docSaved = await doc.save(modelSaveOptions);

  if (!docSaved) {
    throw new Error(`${modelName} (${seedName}): not saved`);
  }

  return returnSavedModel ? docSaved : undefined;
};
