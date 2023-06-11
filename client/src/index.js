import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CardProvider } from "./components/Context/cardContext";

// import {
//   CurrentUserContext,
//   CurrentUserProvider,
// } from "./components/CurrentUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <CurrentUserProvider> */}
    <CardProvider>
      <App />
    </CardProvider>
    {/* </CurrentUserProvider> */}
  </React.StrictMode>
);
