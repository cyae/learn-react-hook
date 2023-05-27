import React from "react";
import { useTheme, useThemeUpdate } from "./Contexts/ThemeContext";

// For function-based component, we need to import useContext & provider component OR custom hook in splitted provider
const FunctionContextComponent = () => {
  // inject context using custom hook
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    background: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </div>
  );
};

export default FunctionContextComponent;
