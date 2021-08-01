import { AlarmsContext } from "@web-alarm-components/AlarmsContext";
import { useContext } from "react";

import { AddNewAlarmButton } from "./AddNewAlarmButton";
import { AlarmList } from "./AlarmList";
import { Clock } from "./Clock";

const Main = () => {
  const [alarms, setAlarms] = useContext(AlarmsContext);

  const onAddAlarmClick = () => {
    setAlarms((prev) => [...prev, { time: new Date() }]);
  };

  return (
    <main>
      <Clock startDate={new Date()} />
      <AlarmList alarms={alarms} />
      <AddNewAlarmButton onClick={onAddAlarmClick} />
    </main>
  );
};

export default Main;
