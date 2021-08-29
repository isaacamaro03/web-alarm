import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: ".5rem",
  },

  timeInput: {
    width: "50%",
    fontSize: "4rem",
    fontFamily: "inherit",
    fontWeight: 300,
    border: "none",
    padding: ".5rem",
    textAlign: "center",
    borderRadius: "1rem",
    background: "hsl(0 0% 100% / .6)",
    outline: "none",
  },

  timePeriodsBox: {
    display: "grid",
    alignSelf: "flex-end",
    padding: ".25rem",
    gap: ".25rem",
    borderRadius: ".5rem",
    background: "hsl(0 0% 100% / .6)",
    fontWeight: "500",
    color: "black",

    "& span": {
      padding: ".25rem",
      borderRadius: "inherit",
      cursor: "pointer",

      "&[active=true]": {
        background: "hsl(0 0% 100% / .6)",
      },
      "&:hover": {
        background: "hsl(0 0% 100% / .7)",
      },
    },
  },
});

const TimeInputs = ({
  hour,
  minute,
  period,
  onHourChange,
  onMinuteChange,
  onPeriodActive,
}) => {
  const classes = useStyles();

  const handlePeriodClick = (period) => {
    typeof onPeriodActive === "function" && onPeriodActive(period);
  };

  return (
    <div className={classes.root}>
      <input
        value={hour}
        className={classes.timeInput}
        onChange={onHourChange}
      ></input>
      <input
        value={minute}
        className={classes.timeInput}
        onChange={onMinuteChange}
      ></input>
      <div className={classes.timePeriodsBox}>
        <span
          active={(period === "am").toString()}
          onClick={() => handlePeriodClick("am")}
        >
          AM
        </span>
        <span
          active={(period === "pm").toString()}
          onClick={() => handlePeriodClick("pm")}
        >
          PM
        </span>
      </div>
    </div>
  );
};

export default TimeInputs;
