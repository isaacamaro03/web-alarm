export default class RepetitionModel {
  static once = "once";
  static daily = "daily";
  static monToFri = "monToFri";
  static custom = {
    monday: "monday",
    tuesday: "tuesday",
    wednesday: "wednesday",
    thursday: "thursday",
    friday: "friday",
    saturday: "saturday",
    sunday: "sunday",
  };
}

const repetitionTexts = {
  [RepetitionModel.once]: "Once",
  [RepetitionModel.daily]: "Daily",
  [RepetitionModel.monToFri]: "Mon to Fri",
  [RepetitionModel.custom]: "Custom",
  [RepetitionModel.monday]: "Monday",
  [RepetitionModel.tuesday]: "Tuesday",
  [RepetitionModel.wednesday]: "Wednesday",
  [RepetitionModel.thursday]: "Thursday",
  [RepetitionModel.friday]: "Friday",
  [RepetitionModel.saturday]: "Saturday",
  [RepetitionModel.sunday]: "Sunday",
};

function getText(repetition) {
  return repetitionTexts[repetition];
}

function getRepetitions() {
  return [
    RepetitionModel.once,
    RepetitionModel.daily,
    RepetitionModel.monToFri,
    RepetitionModel.custom,
  ];
}

function getCustomRepetitions() {
  return [
    RepetitionModel.monday,
    RepetitionModel.tuesday,
    RepetitionModel.wednesday,
    RepetitionModel.thursday,
    RepetitionModel.friday,
    RepetitionModel.saturday,
    RepetitionModel.sunday,
  ];
}

export { repetitionTexts, getRepetitions, getCustomRepetitions, getText };
