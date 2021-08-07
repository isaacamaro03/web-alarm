import { makeStyles } from "@material-ui/core";
import { CustomChip } from "@web-alarm-components/shared/CustomChip";
import { getRepetitions, getText } from "src/utils/models/repetitionModel";

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

  const repetitions = getRepetitions();

  return (
    <div className={classes.root}>
      <div className={classes.repetitionText}>
        {getText(alarmData.repetition)}
      </div>
      <div className={classes.body} hidden={!expanded}>
        <div className={classes.repetitionListBox}>
          {repetitions.map((repName) => (
            <CustomChip
              key={repName}
              selected={repName === alarmData.repetition}
            >
              {getText(repName)}
            </CustomChip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
