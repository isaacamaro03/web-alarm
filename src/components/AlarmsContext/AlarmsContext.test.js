import { render } from "@testing-library/react";
import { useContext, useEffect } from "react";

import { AlarmsContext, AlarmsProvider } from "./AlarmsContext";

describe("<AlarmsContext />", () => {
  it("should obtain context value", () => {
    let contextValue;

    const Test = () => {
      const [alarms] = useContext(AlarmsContext);
      contextValue = alarms;
      return null;
    };

    render(
      <AlarmsProvider>
        <Test />
      </AlarmsProvider>
    );

    expect(contextValue).toBeDefined();
  });
  it("should update context value", () => {
    let contextValue;

    const Test = () => {
      const [alarms, setAlarms] = useContext(AlarmsContext);

      useEffect(() => {
        setAlarms((prev) => [...prev, {}]);
      }, []);

      contextValue = alarms;

      return null;
    };

    render(
      <AlarmsProvider>
        <Test />
      </AlarmsProvider>
    );

    expect(contextValue).toBeDefined();
    expect(contextValue[0]).toBeDefined();
  });
});
