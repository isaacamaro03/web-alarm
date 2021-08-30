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

const RepetitionItems = ({ repetition, onRepetitionChange }) => {
  const classes = useStyles();

  const repetitions = getRepetitions();

  const handleRepetitionClick = (repName) => {
    if (repetition !== repName) {
      typeof onRepetitionChange === "function" && onRepetitionChange(repName);
    }
  };

  return (
    <div className={classes.root}>
      {repetitions.map((repName) => (
        <CustomChip
          key={repName}
          selected={repName === repetition}
          onClick={() => handleRepetitionClick(repName)}
        >
          {getText(repName)}
        </CustomChip>
      ))}
    </div>
  );
};

export default RepetitionItems;
