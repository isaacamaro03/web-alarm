import { Grid, Switch, alpha, makeStyles } from "@material-ui/core";

import { formatAlarmTime } from "./utils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: ".5rem",
    borderRadius: "8px",
    background: alpha(theme.palette.primary.light, 0.15),
    boxShadow: `0 2px 1px 1px ${alpha(theme.palette.primary.light, 0.2)}`,
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",

    "& > time": {
      fontSize: "1.5rem",
      fontWeight: "500",
    },
  },
}));

const AlarmItem = ({ alarmData }) => {
  const classes = useStyles();
  console.log(alarmData);
  return (
    <div data-testid="alarm-item" className={classes.root}>
      <div className={classes.cardTop}>
        <time data-testid="alarm-item-time">
          {formatAlarmTime(alarmData.time)}
        </time>
        <Switch color="primary" checked={alarmData.isActive} />
      </div>
    </div>
  );
};

export default AlarmItem;
