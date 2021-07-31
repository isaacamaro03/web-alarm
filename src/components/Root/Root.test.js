import { render } from "@testing-library/react";

import Root from "./Root";

describe("<Root />", () => {
  it("should render without error", () => {
    render(<Root />);
  });
});
