import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    alignSelf: "center",
  },
});

const AddNewAlarmButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Fab className={classes.root} color="secondary" onClick={onClick}>
      <Add />
    </Fab>
  );
};

export default AddNewAlarmButton;
