import { makeStyles } from "@material-ui/core";
import { AlarmsContext } from "@web-alarm-components/AlarmsContext";
import { useContext } from "react";

import { AddNewAlarmButton } from "./AddNewAlarmButton";
import { AlarmList } from "./AlarmList";
import { Clock } from "./Clock";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column",
    overflow: "visible",
  },
});

const Main = () => {
  const classes = useStyles();
  const [alarms, setAlarms] = useContext(AlarmsContext);

  const onAddAlarmClick = () => {
    setAlarms((prev) => [...prev, { time: new Date(), isActive: true }]);
  };

  return (
    <main className={classes.root}>
      <Clock startDate={new Date()} />
      <AlarmList alarms={alarms} />
      <AddNewAlarmButton onClick={onAddAlarmClick} />
    </main>
  );
};

export default Main;
