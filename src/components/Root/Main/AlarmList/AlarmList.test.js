import { render } from "@testing-library/react";

import { formatAlarmTime } from "./AlarmItem/utils";
import AlarmList from "./AlarmList";

describe("<AlarmList />", () => {
  it("should render without error", () => {
    render(<AlarmList alarms={[]} />);
  });
  it("should render with item", () => {
    const { getByTestId } = render(
      <AlarmList alarms={[{ time: new Date() }]} />
    );

    getByTestId("alarm-item");
  });
});
