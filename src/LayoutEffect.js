import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function LayoutEffect() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  // effect v.s. layouteffect

  // effect-hook is asynchronous with DOM-render,
  // which means the following popup will initially being rendered below button,
  // then after DOM changes, it will be rendered 25px down from button

  // whereas layouteffect is synchronous with DOM-render,
  // which means the following popup will wait for show mutates (before initilal render)
  // then directly render popup 25px down

  // BEST PRACTICE: layouteffect-hook is only useful when effect-hook shows glitched flash render
  useEffect(() => {
    if (popup.current == null || button.current == null) {
      return;
    }

    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;

    return () => {};
  }, [show]);

  return (
    <div>
      <button ref={button} onClick={() => setShow(prev => !prev)}>
        Click Here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a popup
        </div>
      )}
    </div>
  );
}
