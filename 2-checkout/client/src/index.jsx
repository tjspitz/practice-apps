import React from "react";
import { render } from "react-dom";
import App from './components/App.jsx';

render(
  <div>
    <h1>Are you ready to buy all the things?</h1>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <div>
      <App />
    </div>
  </div>,
  document.getElementById("root")
);
