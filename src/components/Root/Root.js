import { makeStyles } from "@material-ui/core";
import { AlarmsProvider } from "@web-alarm-components/AlarmsContext";

import { Header } from "./Header";
import { Main } from "./Main";

const useStyles = makeStyles({
  app: {
    display: "grid",
    gridTemplateRows: "auto minmax(0px, 1fr)",
    gap: "2rem",
    height: "100%",
    width: "444px",
    margin: "0 auto",
    padding: "1rem 0",
  },
});

const Root = () => {
  const classes = useStyles();

  return (
    <>
      <AlarmsProvider>
        <div className={classes.app}>
          <Header />
          <Main />
        </div>
      </AlarmsProvider>
    </>
  );
};

export default Root;
