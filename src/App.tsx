import React from "react";
import Routes from "./routes";
import theme from "./utils/MuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <>
      <Toaster />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
