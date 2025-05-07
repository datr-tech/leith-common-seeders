export const dolomiteSeederJourneyPerSeed = async (
  JourneyModel,
  journeySeed,
  journeySeedName,
  returnSavedModel = false,
) => {
  const journeyModel = new JourneyModel(journeySeed);

  if (!journeyModel) {
    throw new Error(`journeyModel (${journeySeedName}): invalid`);
  }

  const journeyModelSaved = await journeyModel.save();

  if (!journeyModelSaved) {
    throw new Error(`journeyModel (${journeySeedName}): not saved`);
  }

  return returnSavedModel ? journeyModelSaved : undefined;
};
