import React, { createContext, useState } from "react";

const AlarmsContext = createContext();

const AlarmsProvider = ({ children }) => {
  const [alarms, setAlarms] = useState([]);

  return (
    <AlarmsContext.Provider value={[alarms, setAlarms]}>
      {children}
    </AlarmsContext.Provider>
  );
};

export { AlarmsContext, AlarmsProvider };
