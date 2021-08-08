import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";

import { AddAlarmButton } from "./AddAlarmButton";
import { AddAlarmPopup } from "./AddAlarmPopup";

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

  const handleOpenPopup = () => {
    setOpen(!open);
  };

  return (
    <div className={clsx(classes.root)}>
      <AddAlarmPopup open={open} onAdd={onItemAdd} />
      <AddAlarmButton onClick={handleOpenPopup} activated={open} />
    </div>
  );
};

export default AddAlarm;
