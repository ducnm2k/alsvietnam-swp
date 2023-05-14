import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import * as serviceWorker from "./serviceWorker";
import Wrapper from "./components/Wrapper";
Modal.setAppElement("#root");

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById("root")
);
serviceWorker.unregister();
