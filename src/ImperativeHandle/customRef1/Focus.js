import React, { useRef, useState } from "react";
import CustomInput from "./CustomInput";

export default function Focus() {
  const [value, setValue] = useState("red");
  // refer to custom-hook CustomInput
  const inputRef = useRef();

  // normally, ref-hook can only refer to standerd HTML elements
  // which means custom component reference will not work.
  // we can use React.forwardRef() to point to custom component

  // We can furthur use imperativeHandle-hook to point to any component.
  return (
    <div>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
      ></CustomInput>
      <br />
      <button onClick={() => inputRef.current.alertHi()}>Focus</button>
    </div>
  );
}
