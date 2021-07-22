import { render } from "@testing-library/react";

import Clock from "./Clock";
import { formatClockTime } from "./hooks";

describe("<Clock />", () => {
  it("should render without error", () => {
    render(<Clock />);
  });
  it("should render with correct time", () => {
    const date = new Date(2010, 10, 5, 20, 20, 20),
      { getByTestId } = render(<Clock startDate={date} />);

    expect(getByTestId("clock-time")).toHaveTextContent(formatClockTime(date));
  });
});
