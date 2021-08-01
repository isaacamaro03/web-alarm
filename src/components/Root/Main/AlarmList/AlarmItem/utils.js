import dateFormat from "dateformat";

const alarmTimeFormat = "h:MM TT";

function formatAlarmTime(date) {
  return dateFormat(date, alarmTimeFormat);
}

export { formatAlarmTime };
