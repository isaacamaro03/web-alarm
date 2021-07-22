const { formatClockTime } = require("./hooks");

describe("Clock hooks", () => {
  it("should format date correctly", () => {
    expect(formatClockTime(new Date(2021, 12, 5, 15, 10, 5))).toBe(
      "3:10:05 PM"
    );
    expect(formatClockTime(new Date(2021, 12, 5, 8, 0, 0))).toBe("8:00:00 AM");
  });
});
