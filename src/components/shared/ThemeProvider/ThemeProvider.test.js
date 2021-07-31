import { useTheme } from "@material-ui/styles";
import { render } from "@testing-library/react";

import { default as ThemeProvider, defaultTheme } from "./ThemeProvider";

describe("<ThemeProvider />", () => {
  it("should provide correct theme", () => {
    let testTheme;

    const Test = () => {
      testTheme = useTheme();
      return null;
    };

    render(
      <ThemeProvider>
        <Test />
      </ThemeProvider>
    );

    expect(testTheme).toBe(defaultTheme);
  });
});
