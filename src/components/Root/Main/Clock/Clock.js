import { formatClockTime } from "./hooks";

const Clock = ({ startDate }) => {
  return (
    <div>
      <time data-testid="clock-time">
        {startDate ? formatClockTime(startDate) : "00:00:00"}
      </time>
    </div>
  );
};

export default Clock;
