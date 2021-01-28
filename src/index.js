import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ThemeProvider, useTheme } from "@material-ui/core/styles";

const theme = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
};

function Theming() {
  const defaultTheme = useTheme();
  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <App />
    </ThemeProvider>
  );
}

ReactDOM.render(<Theming />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
