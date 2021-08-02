import { makeStyles } from "@material-ui/core";
import { AlarmsProvider } from "@web-alarm-components/AlarmsContext";

import { Header } from "./Header";
import { Main } from "./Main";

const useStyles = makeStyles({
  app: {
    height: "100%",
    width: "444px",
    margin: "0 auto",
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
