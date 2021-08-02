import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontSize: "3.75rem",
    marginBottom: "2rem",

    "& > div": {
      fontSize: "1rem",

      "& > a": {
        marginLeft: ".25rem",
        fontWeight: "500",
      },
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Typography variant="h2">Web Alarm</Typography>
      <div>
        <span>designed by</span>
        <a href="https://github.com/isaacamaro03" data-testid="author-link">
          Isaac Amaro
        </a>
      </div>
    </header>
  );
};

export default Header;
