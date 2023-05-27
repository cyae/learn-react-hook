import React, { Component } from "react";
import { ThemeContext } from "../ContextVerbose";

class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      background: dark ? "#333" : "#CCC",
      color: dark ? "#ccc" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
  }

  // For class-based component, it consumes context using ThemeContext.Consumer wrapper
  render() {
    return (
      <ThemeContext.Consumer>
        {darkTheme => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassContextComponent;
