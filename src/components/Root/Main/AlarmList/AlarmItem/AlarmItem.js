import { Switch, alpha, makeStyles } from "@material-ui/core";
import { CustomChip } from "@web-alarm-components/shared/CustomChip";
import { useState } from "react";

import { ItemDetails } from "./ItemDetails";
import { formatAlarmTime } from "./utils";

const useStyles = makeStyles(theme => ({
  root: {
    padding: ".5rem",
    borderRadius: "8px",
    background: alpha(theme.palette.primary.light, 0.4),
    boxShadow: `-2px 3px 1px 1px ${alpha(theme.palette.primary.light, 0.2)}`
  },
  body: {},
  cardTop: {
    display: "flex",
    justifyContent: "space-between",

    "& > time": {
      fontSize: "1.5rem",
      fontWeight: "500"
    }
  },
  cardBottom: {
    display: "flex",
    marginTop: ".5rem"
  },
  moreSettingsButton: {
    marginLeft: "auto"
  }
}));

const AlarmItem = ({ alarmData }) => {
  const classes = useStyles();

  const [detailsExpanded, setDetailsExpanded] = useState(false);

  const handleDetailsToggle = () => {
    setDetailsExpanded(!detailsExpanded);
  };

  return (
    <div data-testid="alarm-item" className={classes.root}>
      <div className={classes.body}>
        <div className={classes.cardTop}>
          <time data-testid="alarm-item-time">
            {formatAlarmTime(alarmData.time)}
          </time>
          <Switch color="primary" checked={alarmData.isActive} />
        </div>
        <ItemDetails alarmData={alarmData} expanded={detailsExpanded} />
        <div className={classes.cardBottom}>
          <CustomChip
            className={classes.moreSettingsButton}
            onClick={handleDetailsToggle}
          >
            {detailsExpanded ? "Hide settings" : "More settings"}
          </CustomChip>
        </div>
      </div>
    </div>
  );
};

export default AlarmItem;
