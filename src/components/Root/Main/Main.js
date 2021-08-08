import { makeStyles } from "@material-ui/core";
import { AlarmsContext } from "@web-alarm-components/AlarmsContext";
import { useContext } from "react";
import RepetitionModel from "src/utils/models/repetitionModel";

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

  const onAddAlarmClick = () => {
    setAlarms((prev) => [
      ...prev,
      {
        key: uniqid(),
        time: new Date(),
        isActive: true,
        repetition: RepetitionModel.once,
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
