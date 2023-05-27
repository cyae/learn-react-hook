import React, { useState } from "react";
import ClassContextComponent from "./ClassContextComponent";

// context-hook provide context-values for all components & subcomponents it wrapped in.
// with context-hook, we no longer need to pass props with "attr={...}"
// contexted values behave like global variables.
export const ThemeContext = React.createContext();

// in this example, we invasively define context and its state inside the component for 3 subcomponents.
const ContextVerbose = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(previousDarkTheme => !previousDarkTheme);
  }

  // context-hook provides button, FCC, CCC with access to value={darkTheme}
  // Within each component, they can consume darkTheme
  return (
    <div>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent></FunctionContextComponent>
        <ClassContextComponent></ClassContextComponent>
      </ThemeContext.Provider>
    </div>
  );
};

export default ContextVerbose;
