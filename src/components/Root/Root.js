import { AlarmsProvider } from "@web-alarm-components/AlarmsContext";

import { Header } from "./Header";
import { Main } from "./Main";

const Root = () => {
  return (
    <>
      <AlarmsProvider>
        <Header />
        <Main />
      </AlarmsProvider>
    </>
  );
};

export default Root;
