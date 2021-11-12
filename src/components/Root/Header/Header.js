import { Typography, makeStyles } from "@material-ui/core";

import { Clock } from "./Clock";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "300"
  },
  titleWrapper: {
    display: "inline-block",
    fontWeight: "500"
  },
  descWrapper: {
    "& > span": {
      fontSize: ".8rem"
    },
    "& > a": {
      fontSize: ".8rem",
      marginLeft: ".25rem",
      fontWeight: "bold",
      color: theme.palette.primary.dark
    }
  },
  title: {
    fontSize: "2rem",
    fontWeight: "500"
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.titleWrapper}>
        <Typography variant="h1" className={classes.title}>
          web-alarm
        </Typography>
      </div>
      <Clock startDate={new Date()} />
    </header>
  );
};

export default Header;
