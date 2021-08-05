import { render } from "@testing-library/react";

import CustomChip, { classes } from "./CustomChip";

describe("<CustomChip />", () => {
  it("renders without error", () => {
    render(<CustomChip />);
  });
  it("render with correct text", () => {
    const { getByText } = render(<CustomChip>Test text</CustomChip>);
    getByText(/test text/i);
  });
  it("render with correct selected class", () => {
    const { getByRole } = render(<CustomChip selected>Test text</CustomChip>);
    expect(getByRole("button")).toHaveClass(classes.selected);
  });
});
