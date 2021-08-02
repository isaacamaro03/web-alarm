import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "3.75rem",

    "& > div": {
      fontSize: ".8rem",
      lineHeight: 1,

      "& > a": {
        marginLeft: ".25rem",
        fontWeight: "500",
        color: theme.palette.primary.dark,
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Typography variant="h2">Web Alarm</Typography>
      <div>
        <span>designed by</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/isaacamaro03"
          data-testid="author-link"
        >
          Isaac Amaro
        </a>
      </div>
    </header>
  );
};

export default Header;
