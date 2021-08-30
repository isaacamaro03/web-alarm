import { Grow, alpha, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";

import RepeatInputs from "./RepeatInputs/RepeatInputs";
import { TimeInputs } from "./TimeInputs";

const useStyles = makeStyles((theme) => ({
  root: {
    background: alpha(theme.palette.secondary.main, 0.8),
    transition: `width 140ms cubic-bezier(0.4, 0, 1, 1), height 180ms ease-out, box-shadow 140ms linear 185ms, border-radius 180ms cubic-bezier(0, 0, 0.2, 1)`,
    position: "absolute",
    bottom: "28px",
    willChange: "width, height, border-radius, box-shadow",
    opacity: 0,
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    boxShadow: theme.shadows[1],
  },
  open: {
    "&-enter": {
      opacity: 1,
    },
    "&-enter-active, &-enter-done": {
      opacity: 1,
      width: "280px",
      height: "344px",
      borderRadius: "16px",
      boxShadow: theme.shadows[8],
    },
    "&-exit": {
      opacity: 1,
    },
  },
  body: {
    padding: "1rem",
  },
}));

const AddAlarmPopup = ({
  open,
  hour,
  minute,
  period,
  repetition,
  onHourChange,
  onMinuteChange,
  onPeriodActive,
  onRepetitionChange,
}) => {
  const classes = useStyles();

  return (
    <CSSTransition in={open} timeout={180} classNames={classes.open}>
      <div className={clsx(classes.root)}>
        <Grow in={open} timeout={open ? 440 : 120}>
          <div className={clsx(classes.body)}>
            <TimeInputs
              hour={hour}
              minute={minute}
              period={period}
              onHourChange={onHourChange}
              onMinuteChange={onMinuteChange}
              onPeriodActive={onPeriodActive}
            />
            <RepeatInputs
              repetition={repetition}
              onRepetitionChange={onRepetitionChange}
            />
          </div>
        </Grow>
      </div>
    </CSSTransition>
  );
};

export default AddAlarmPopup;
