import React, { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());

    return () => {};
  }, [getItems]); // watch on getItems mutation

  return items.map(item => <div key={item}>{item}</div>);
}
