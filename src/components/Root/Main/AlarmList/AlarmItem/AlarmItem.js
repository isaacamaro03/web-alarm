import { Switch, alpha, makeStyles } from "@material-ui/core";
import { CustomChip } from "@web-alarm-components/shared/CustomChip";
import { getText } from "src/utils/models/repetitionModel";

import { formatAlarmTime } from "./utils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: ".5rem",
    borderRadius: "8px",
    background: alpha(theme.palette.primary.light, 0.15),
    boxShadow: `-2px 3px 1px 1px ${alpha(theme.palette.primary.light, 0.2)}`,
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",

    "& > time": {
      fontSize: "1.5rem",
      fontWeight: "500",
    },
  },
  cardBottom: {
    display: "flex",
    justifyContent: "space-between",

    "& > span": {
      fontWeight: 500,
    },
  },
  moreSettingsButton: {
    marginTop: "1.5rem",
  },
}));

const AlarmItem = ({ alarmData }) => {
  const classes = useStyles();

  return (
    <div data-testid="alarm-item" className={classes.root}>
      <div className={classes.cardTop}>
        <time data-testid="alarm-item-time">
          {formatAlarmTime(alarmData.time)}
        </time>
        <Switch color="primary" checked={alarmData.isActive} />
      </div>
      <div className={classes.cardBottom}>
        <span>{getText(alarmData.repetition)}</span>
        <CustomChip className={classes.moreSettingsButton}>
          More settings
        </CustomChip>
      </div>
    </div>
  );
};

export default AlarmItem;
