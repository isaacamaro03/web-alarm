import { ClickAwayListener, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import RepetitionModel from "src/utils/models/repetitionModel";

import { AddAlarmButton } from "./AddAlarmButton";
import { AddAlarmPopup } from "./AddAlarmPopup";
import { padNumber } from "./utils";

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
}));

const AddAlarm = ({ onItemAdd }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [period, setPeriod] = useState();
  const [repetition, setRepetition] = useState(RepetitionModel.once);

  useEffect(() => {
    const startDate = new Date();
    const hours = startDate.getHours();

    setPeriod(hours > 12 ? "pm" : "am");

    setHour(padNumber(hours % 12 || hours));
    setMinute(padNumber(startDate.getMinutes()));
  }, []);

  const handleOpenPopup = () => {
    if (open) {
      typeof onItemAdd === "function" &&
        onItemAdd({
          time: new Date(0, 0, 0, hour, minute, 0),
          repetition,
        });
    }
    setOpen(!open);
  };

  const onHourChange = (e) => {
    setHour(e.target.value);
  };
  const onMinuteChange = (e) => {
    setMinute(e.target.value);
  };
  const onPeriodActive = (period) => {
    setPeriod(period);
  };
  const onRepetitionChange = (repetitionName) => {
    setRepetition(repetitionName);
  };

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={clsx(classes.root)}>
        <AddAlarmPopup
          open={open}
          hour={hour}
          minute={minute}
          period={period}
          repetition={repetition}
          onHourChange={onHourChange}
          onMinuteChange={onMinuteChange}
          onPeriodActive={onPeriodActive}
          onRepetitionChange={onRepetitionChange}
        />
        <AddAlarmButton onClick={handleOpenPopup} activated={open} />
      </div>
    </ClickAwayListener>
  );
};

export default AddAlarm;
