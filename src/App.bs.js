// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Counter from "./Counter.bs.js";
import * as TestComponent from "./TestComponent.bs.js";
import * as JsxRuntime from "react/jsx-runtime";

function App(props) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("h1", {
                      children: "Test App"
                    }),
                JsxRuntime.jsx(Counter.make, {}),
                JsxRuntime.jsx(TestComponent.make, {})
              ]
            });
}

var make = App;

export {
  make ,
}
/* Counter Not a pure module */
