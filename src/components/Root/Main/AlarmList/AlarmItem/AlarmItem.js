import { formatAlarmTime } from "./utils";

const AlarmItem = ({ alarmData }) => {
  return (
    <div data-testid="alarm-item">
      <time data-testid="alarm-item-time">
        {formatAlarmTime(alarmData.time)}
      </time>
    </div>
  );
};

export default AlarmItem;
