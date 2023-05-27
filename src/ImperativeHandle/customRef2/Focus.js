import React, { useRef, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

export default function Focus() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={modalRef.current.focusCloseBtn()}>Focus Close</button>
      <button onClick={modalRef.current.focusConfirmBtn()}>
        Focus Confirm
      </button>
      <button onClick={modalRef.current.focusDenyBtn()}>Focus Deny</button>
      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      ></ConfirmationModal>
    </div>
  );
}
