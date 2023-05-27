import React, { useState } from "react";

export default function DeferredValue() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input}></List>
    </div>
  );
}
