import React, { startTransition, useState, useTransition } from "react";

export default function Transition() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LARGE_SIZE = 20000;

  // by default, react has all renderings as SAME PRIORITY
  // which means the below TIME-CONSUMING setList() will follow setInput's render
  // this will block the input from mutating & being rendered again.

  // we can use transition-hook to set high-priority for setInput() to upgrade responsivity
  const [isPending, startTransition] = useTransition();

  function handelChange(e) {
    // outside transition: high-priority
    setInput(e.target.value);

    // inside transition: low-priority
    startTransition(() => {
      const newList = [];
      for (let i = 0; i < LARGE_SIZE; i++) {
        newList.push(e.target.value);
      }
      setList(newList);
    });
  }

  return (
    <div>
      <input type="text" value={input} onChange={handelChange} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </div>
  );
}
