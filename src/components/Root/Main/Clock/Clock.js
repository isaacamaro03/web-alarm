import { useEffect } from "react";

import { useDateForEverySecond } from "./hooks";
import { formatClockTime } from "./utils";

const Clock = ({ startDate, onDateChange }) => {
  const currentDate = useDateForEverySecond(startDate);

  useEffect(() => {
    if (currentDate !== startDate) {
      onDateChange && onDateChange(currentDate);
    }
  }, [currentDate, onDateChange]);

  return (
    <div>
      <time data-testid="clock-time">
        {currentDate ? formatClockTime(currentDate) : "00:00:00"}
      </time>
    </div>
  );
};

export default Clock;
