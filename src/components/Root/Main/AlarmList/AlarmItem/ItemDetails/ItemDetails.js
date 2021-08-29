import { makeStyles } from "@material-ui/core";
import { getText } from "src/utils/models/repetitionModel";

import RepetitionItems from "../RepetitionItems/RepetitionItems";

const useStyles = makeStyles({
  root: {},
  repetitionText: {
    fontWeight: 500,
  },
  body: {
    "&:not([hidden])": {
      display: "flex",
    },
  },
  repetitionListBox: {
    display: "flex",
    gap: 4,
    margin: "1rem 0",
  },
});

const ItemDetails = ({ alarmData, expanded }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.repetitionText}>
        {getText(alarmData.repetition)}
      </div>
      <div className={classes.body} hidden={!expanded}>
        <RepetitionItems repetition={alarmData.repetition} />
      </div>
    </div>
  );
};

export default ItemDetails;
