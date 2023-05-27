import React from "react";
import ReactDOM from "react-dom/client";
import State from "./State";
import Effect from "./Effect";
import Memo from "./Memo";
import Ref from "./Ref";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <State />
    {/* <Effect></Effect>
    <Memo></Memo>
    <Ref></Ref> */}
  </React.StrictMode>
);
