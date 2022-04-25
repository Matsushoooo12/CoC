import React from "react";
import { ThemeProvider } from "@material-ui/core";

import Header from "./components/templates/Header";
import theme from "./theme/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
