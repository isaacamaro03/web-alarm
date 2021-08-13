import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "1rem",
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
    padding: ".5rem",
    borderRadius: ".5rem",
    background: "hsl(0 0% 100% / .6)",
    fontWeight: "500",
    color: "black",
  },
});

const TimeInputs = () => {
  const classes = useStyles();
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");

  return (
    <div className={classes.root}>
      <input value={hour} className={classes.timeInput}></input>
      <input value={minute} className={classes.timeInput}></input>
      <div className={classes.timePeriodsBox}>
        <div>AM</div>
        <div>PM</div>
      </div>
    </div>
  );
};

export default TimeInputs;
