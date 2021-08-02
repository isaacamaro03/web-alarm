import { alpha, makeStyles } from "@material-ui/core";

import { formatAlarmTime } from "./utils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: ".5rem",
    borderRadius: "8px",
    background: alpha(theme.palette.primary.light, 0.15),
    boxShadow: `0 2px 1px 1px ${alpha(theme.palette.primary.light, 0.2)}`,

    "& > time": {
      fontSize: "1.5rem",
      fontWeight: "500",
    },
  },
}));

const AlarmItem = ({ alarmData }) => {
  const classes = useStyles();

  return (
    <div data-testid="alarm-item" className={classes.root}>
      <time data-testid="alarm-item-time">
        {formatAlarmTime(alarmData.time)}
      </time>
    </div>
  );
};

export default AlarmItem;
