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

const RepeatInputs = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Repeat</Typography>
      <RepetitionItems repetition={"once"} />
    </div>
  );
};

export default RepeatInputs;
