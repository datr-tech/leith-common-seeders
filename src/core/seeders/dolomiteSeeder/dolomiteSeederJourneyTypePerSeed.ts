export const dolomiteSeederJourneyTypePerSeed = async (
  JourneyTypeModel,
  journeyTypeSeed,
  journeyTypeSeedName,
  returnSavedModel = false,
) => {
  const journeyTypeModel = new JourneyTypeModel(journeyTypeSeed);

  if (!journeyTypeModel) {
    throw new Error(`journeyTypeModel (${journeyTypeSeedName}): invalid`);
  }

  const options = { validateBeforeSave: false };
  const journeyTypeModelSaved = await journeyTypeModel.save(options);

  if (!journeyTypeModelSaved) {
    throw new Error(`journeyTypeModel (${journeyTypeSeedName}): not saved`);
  }

  return returnSavedModel ? journeyTypeModelSaved : undefined;
};
