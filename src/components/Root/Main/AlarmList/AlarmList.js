import { makeStyles } from "@material-ui/core";

import { AlarmItem } from "./AlarmItem";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column",
    flex: 1,
    marginBottom: "3rem",
    overflowY: "scroll",
    paddingLeft: ".5rem",

    "& > img": {
      margin: "auto 0"
    }
  },
  wrapper: {
    display: "flex",
    flexFlow: "column",
    gap: "1rem",
    padding: "0 .25rem .25rem .25rem"
  },
  noAlarmsTitle: {
    margin: "auto"
  }
});

const AlarmList = ({ alarms }) => {
  const classes = useStyles();

  const EmptyListIllustration = () => {
    return (
      <h2 className={classes.noAlarmsTitle}>No alarms configured for you</h2>
    );
  };

  return (
    <div className={classes.root}>
      {alarms.length ? (
        <div className={classes.wrapper}>
          {alarms.map(alarm => (
            <AlarmItem key={alarm.key} alarmData={alarm} />
          ))}
        </div>
      ) : (
        <EmptyListIllustration />
      )}
    </div>
  );
};

export default AlarmList;
