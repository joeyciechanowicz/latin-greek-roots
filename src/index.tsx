/* @refresh reload */
import { render } from "solid-js/web";
import { init, track, parameters, trackPages } from "insights-js";

// if (process.env.NODE_ENV !== "development") {
init("j9GuRcfRIbGwktOW");
// }

trackPages();
setTimeout(() => {
  track({
    id: "app-version",
    parameters: {
      version: "1.0.0",
    },
  });
}, 1);

import "./index.css";
import App from "./App";

render(() => <App />, document.getElementById("root") as HTMLElement);
