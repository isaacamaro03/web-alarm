import { render } from "@testing-library/react";

import App from "./App";

describe("<App />", () => {
  it("should render without error", () => {
    const { getByText } = render(<App />);
    getByText(/hello world!/i);
  });
});
