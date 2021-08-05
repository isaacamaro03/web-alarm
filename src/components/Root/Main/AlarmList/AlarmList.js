import { makeStyles } from "@material-ui/core";

import { AlarmItem } from "./AlarmItem";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column",
    flex: 1,
    marginBottom: "3rem",
    overflow: "auto",

    "& > img": {
      margin: "auto 0",
    },
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

  const EmptyListIllustration = () => {
    return (
      <img
        src={
          process.env.NODE_ENV === "development"
            ? "./web-alarm/clock_illustration.svg"
            : "./clock_illustration.svg"
        }
        alt="a clock to serve as a space filler when there's no alarms configured"
      />
    );
  };

  return (
    <div className={classes.root}>
      {alarms.length ? (
        <div className={classes.wrapper}>
          {alarms.map((alarm) => (
            <AlarmItem alarmData={alarm} />
          ))}
        </div>
      ) : (
        <EmptyListIllustration />
      )}
    </div>
  );
};

export default AlarmList;
