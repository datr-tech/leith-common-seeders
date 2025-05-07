export const dolomiteSeederHopPerSeed = async (
  HopModel,
  hopSeed,
  hopSeedName,
  returnSavedModel = false,
) => {
  const hopModel = new HopModel(hopSeed);

  if (!hopModel) {
    throw new Error(`hopModel (${hopSeedName}): invalid`);
  }

  const hopModelSaved = await hopModel.save();

  if (!hopModelSaved) {
    throw new Error(`hopModel (${hopSeedName}): not saved`);
  }

  return returnSavedModel ? hopModelSaved : undefined;
};
