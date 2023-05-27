import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./Contexts/ThemeContext";

// in this example, we split out the context & state logic into /Contexts/ThemeContext,
// so that the main component looks simpler
// and since the context is decoupled, we can inject it anywhere.
const ContextObvious = () => {
  return (
    <ThemeProvider>
      <FunctionContextComponent></FunctionContextComponent>
    </ThemeProvider>
  );
};

export default ContextObvious;
