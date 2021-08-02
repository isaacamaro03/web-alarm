import "./App.css";

import { CssBaseline } from "@material-ui/core";
import { Root } from "@web-alarm-components/Root";
import { ThemeProvider } from "@web-alarm-components/shared/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Root />
    </ThemeProvider>
  );
}

export default App;
