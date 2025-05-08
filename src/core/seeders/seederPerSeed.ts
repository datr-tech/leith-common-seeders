import { modelSaveOptions } from '@app-lcs2/config';
import { logger } from '@datr.tech/leith-common-logger';

export const seederPerSeed = async ({
  model,
  modelName,
  seed,
  seedName,
  returnSavedModel = false,
  verbose = false,
}) => {
  if (verbose) {
    logger.info({ modelName, model, seedName, seed });
  }

  const doc = new model(seed);

  if (verbose) {
    logger.info({ doc });
  }

  if (!doc) {
    throw new Error(`${modelName} (${seedName}): invalid`);
  }

  const docSaved = await doc.save(modelSaveOptions);

  if (!docSaved) {
    throw new Error(`${modelName} (${seedName}): not saved`);
  }

  return returnSavedModel ? docSaved : undefined;
};
