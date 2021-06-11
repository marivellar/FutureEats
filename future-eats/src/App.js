import React from "react";
import "./App.css";
import Router from "./Routes/router";
import { Container } from "./AppStyles";
import GlobalState from "./globalState/globalState";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme/theme";

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Container>
          <Router />
        </Container>
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
