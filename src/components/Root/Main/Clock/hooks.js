import dateFormat from "dateformat";

const clockFormat = "h:MM:ss TT";

function formatClockTime(date) {
  return dateFormat(date, clockFormat);
}

export { formatClockTime };
