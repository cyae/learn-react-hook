import React, { useEffect, useState } from "react";

const Effect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("This line is rendered for every state mutation");

    // effect-hook is used to introduce side-effect when state mutates
    // in this case, fetching different resources when resourceType changes
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((resp) => resp.json())
      .then((json) => setItems(json));

    return () => {};
  }, [resourceType]); // the watched states list, if this list is empty, the upper function will be called only once(=onMount)

  const [windowWidth, setWindowWidth] = useState(window.innerHeight);
  useEffect(() => {
    // component onmount
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    // component unmount, this is a callback-destructor before the next onmount
    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}> Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
      <div>{windowWidth}</div>
    </div>
  );
};

export default Effect;
