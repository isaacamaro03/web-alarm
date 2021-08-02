import React, { createContext, useEffect, useState } from "react";
import { addAlarmsToStore, getAlarmsFromStore } from "src/utils/store";

const AlarmsContext = createContext();

const AlarmsProvider = ({ children, preventStoreLoading }) => {
  const [alarms, setAlarms] = useState([]);

  useEffect(() => {
    if (!preventStoreLoading) {
      const storeAlarms = getAlarmsFromStore();
      if (storeAlarms) {
        setAlarms(storeAlarms);
      }
    }
  }, []);

  useEffect(() => {
    addAlarmsToStore(alarms);
  }, [alarms]);

  return (
    <AlarmsContext.Provider value={[alarms, setAlarms]}>
      {children}
    </AlarmsContext.Provider>
  );
};

export { AlarmsContext, AlarmsProvider };
