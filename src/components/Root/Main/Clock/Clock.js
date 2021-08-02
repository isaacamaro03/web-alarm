import { makeStyles } from "@material-ui/core";

import { useDateForEverySecond } from "./hooks";
import { formatClockTime } from "./utils";

const useStyles = makeStyles({
  root: {
    padding: "8px 0",

    "& > time": {
      fontSize: "2rem",
      fontWeight: "500",
    },
  },
});

const Clock = ({ startDate, onDateChange }) => {
  const classes = useStyles();
  const currentDate = useDateForEverySecond(startDate);

  if (currentDate !== startDate) {
    onDateChange && onDateChange(currentDate);
  }

  return (
    <div className={classes.root}>
      <time data-testid="clock-time">
        {currentDate ? formatClockTime(currentDate) : "00:00:00"}
      </time>
    </div>
  );
};

export default Clock;
