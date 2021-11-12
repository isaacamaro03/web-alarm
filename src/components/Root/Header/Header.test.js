import { render } from "@testing-library/react";

import Header from "./Header";

describe("<Header />", () => {
  it("should render without error", () => {
    render(<Header />);
  });
  it("should contain correct content", () => {
    const { getByText } = render(<Header />);

    getByText(/^web-alarm$/i);
  });
});
