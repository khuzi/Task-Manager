import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ItemsContextProvider from "./context/itemsContext";
import SystemContextProvider from "./context/systemContext";
import PeopleContextProvider from "./context/peopleContext";

ReactDOM.render(
  <React.StrictMode>
    <ItemsContextProvider>
      <SystemContextProvider>
        <PeopleContextProvider>
          <App />
        </PeopleContextProvider>
      </SystemContextProvider>
    </ItemsContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
