import { render } from "@testing-library/react";
import { AlarmsProvider } from "@web-alarm-components/AlarmsContext";

import Main from "./Main";

describe("<Main />", () => {
  it("should error without error", () => {
    render(
      <AlarmsProvider>
        <Main />
      </AlarmsProvider>
    );
  });
});
