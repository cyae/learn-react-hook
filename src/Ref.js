import { useEffect, useRef, useState } from "react";

const Ref = () => {
  const [name, setName] = useState("");
  // Say, we need to print the times that the Ref component is rendered
  // it's inappropriate to use state-hook like below
  // , because each renderCount mutation will also cause Ref to re-render
  // which will triggers infinite recurrsion
  // const [renderCount, setRenderCount] = useState(1)

  // 1. We can use ref-hook, which is almost same as state-hook, WITHOUT RE-RENDERING the component
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // 2. Another practice of ref-hook is to REFER TO DOM ELEMENTS
  const inputRef = useRef();

  function focus() {
    inputRef.current // refer to input
      .focus();

    // NOTICE that ref-hook changes DOESN'T mutate state
    // below will thusly not re-render component
    inputRef.current.value = "New value";
  }

  // 3. ref-hook can SAVE PREVIOUS STATE
  const previousName = useRef("");
  useEffect(() => {
    previousName.current = name;

    return () => {};
  }, [name]);

  return (
    <div>
      <input
        ref={inputRef} // create a reference to input element
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>My name used to be {previousName.current}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus to input</button>
    </div>
  );
};

export default Ref;
