import { AlarmsContext } from "@web-alarm-components/AlarmsContext";
import { useContext } from "react";

import { AddNewAlarmButton } from "./AddNewAlarmButton";
import { AlarmList } from "./AlarmList";
import { Clock } from "./Clock";

const Main = () => {
  const [alarms, setAlarms] = useContext(AlarmsContext);

  return (
    <main>
      <Clock startDate={new Date()} />
      <AlarmList alarms={alarms} />
      <AddNewAlarmButton />
    </main>
  );
};

export default Main;
