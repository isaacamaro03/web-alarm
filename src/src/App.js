import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@web-alarm-components/shared/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div className="App">
        <h1>Hello world!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
