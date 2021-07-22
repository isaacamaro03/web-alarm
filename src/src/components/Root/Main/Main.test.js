import { render } from "@testing-library/react";

import Main from "./Main";

describe("<Main />", () => {
  it("should error without error", () => {
    render(<Main />);
  });
});
