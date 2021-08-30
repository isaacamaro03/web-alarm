import { makeStyles } from "@material-ui/core";
import { AlarmsContext } from "@web-alarm-components/AlarmsContext";
import { useContext } from "react";

import { AddAlarm } from "./AddAlarm";
import { AlarmList } from "./AlarmList";

const uniqid = require("uniqid");

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

  const onAddAlarmClick = ({ time, repetition }) => {
    setAlarms((prev) => [
      ...prev,
      {
        key: uniqid(),
        time: time,
        isActive: true,
        repetition: repetition,
      },
    ]);
  };

  return (
    <main className={classes.root}>
      <AlarmList alarms={alarms} />
      <AddAlarm onItemAdd={onAddAlarmClick} />
    </main>
  );
};

export default Main;
