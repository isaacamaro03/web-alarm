import { AlarmItem } from "./AlarmItem";

const AlarmList = ({ alarms }) => {
  return alarms.map((alarm) => <AlarmItem alarmData={alarm} />);
};

export default AlarmList;
