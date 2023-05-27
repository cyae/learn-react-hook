import React, { useId } from "react";

export default function EmailForm() {
  // id-hook generate a new id when render the component
  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="email" />
      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type="email" />
    </div>
  );
}
