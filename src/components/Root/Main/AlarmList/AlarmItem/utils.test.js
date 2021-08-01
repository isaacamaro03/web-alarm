const { formatAlarmTime } = require("./utils");

describe("AlarmItem utils", () => {
  it("should format date correctly", () => {
    expect(formatAlarmTime(new Date(2021, 12, 5, 15, 10, 5))).toBe("3:10 PM");
    expect(formatAlarmTime(new Date(2021, 12, 5, 8, 0, 0))).toBe("8:00 AM");
  });
});
