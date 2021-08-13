import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {},
  activated: {
    background: theme.palette.primary.main,

    "&:hover": {
      background: theme.palette.primary.dark,
    },
    "& $icon": {
      marginRight: ".5rem",
      transition: "margin 80ms linear",
    },
  },
  icon: {},
}));

const AddAlarmButton = ({ activated, onClick }) => {
  const classes = useStyles();

  return (
    <Fab
      className={clsx(classes.root, activated ? classes.activated : null)}
      color="secondary"
      onClick={onClick}
      variant={activated ? "extended" : "circular"}
    >
      <Add className={classes.icon} />
      {activated ? "Criar" : ""}
    </Fab>
  );
};

export default AddAlarmButton;
