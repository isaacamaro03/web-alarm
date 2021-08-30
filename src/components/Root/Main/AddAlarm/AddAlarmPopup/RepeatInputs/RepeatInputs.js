import RepetitionItems from "@web-alarm-components/Root/Main/AlarmList/AlarmItem/RepetitionItems/RepetitionItems";

const { Typography, makeStyles } = require("@material-ui/core");

const useStyles = makeStyles({
  root: {
    marginTop: "1rem",
    color: "hsl(0 0% 100% / .8)",
  },
  title: {
    fontWeight: "500",
  },
});

const RepeatInputs = ({ repetition, onRepetitionChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Repeat</Typography>
      <RepetitionItems
        repetition={repetition}
        onRepetitionChange={onRepetitionChange}
      />
    </div>
  );
};

export default RepeatInputs;
