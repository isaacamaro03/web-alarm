import { makeStyles } from "@material-ui/core";
import { CustomChip } from "@web-alarm-components/shared/CustomChip";
import { getRepetitions, getText } from "src/utils/models/repetitionModel";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    gap: ".5rem",
    margin: ".5rem 0",
  },
});

const RepetitionItems = ({ repetition }) => {
  const classes = useStyles();

  const repetitions = getRepetitions();

  return (
    <div className={classes.root}>
      {repetitions.map((repName) => (
        <CustomChip key={repName} selected={repName === repetition}>
          {getText(repName)}
        </CustomChip>
      ))}
    </div>
  );
};

export default RepetitionItems;
