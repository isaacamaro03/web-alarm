import { makeStyles } from "@material-ui/core";

import { AlarmItem } from "./AlarmItem";

const useStyles = makeStyles({
  root: {
    flex: 1,
    marginBottom: "1rem",
    overflow: "auto",
  },
  wrapper: {
    display: "flex",
    flexFlow: "column",
    gap: "1rem",
    padding: "0 .25rem .25rem .25rem",
  },
});

const AlarmList = ({ alarms }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {alarms.map((alarm) => (
          <AlarmItem alarmData={alarm} />
        ))}
      </div>
    </div>
  );
};

export default AlarmList;
