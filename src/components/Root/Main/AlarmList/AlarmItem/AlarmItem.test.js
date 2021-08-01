import { render } from "@testing-library/react";

import { formatAlarmTime } from "./utils";
import { AlarmItem } from ".";

describe("<AlarmItem />", () => {
  it("should render without error", () => {
    render(<AlarmItem alarmData={{ time: new Date() }} />);
  });
  it("should render correctly with props", () => {
    const date = new Date();
    const dateAsText = formatAlarmTime(date);
    const { getByTestId } = render(
      <AlarmItem alarmData={{ time: new Date() }} />
    );
    expect(getByTestId("alarm-item-time")).toHaveTextContent(dateAsText);
  });
});
