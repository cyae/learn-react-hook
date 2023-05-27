import React, { useImperativeHandle, useRef } from "react";

// using imperitaveHandle-hook to access multiple elements inside a custom component from outer main component
function ConfirmationModal({ isOpen, onClose }, ref) {
  // link ref-hooks to HTML buttons
  const closeRef = useRef();
  const denyRef = useRef();
  const confirmRef = useRef();

  useImperativeHandle(
    ref,

    // ref now points to 3 functions
    () => {
      return {
        focusCloseBtn: () => closeRef.current.focus(),
        focusDenyBtn: () => denyRef.current.focus(),
        focusConfirmBtn: () => confirmRef.current.focus(),
      };
    },
    []
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" ref={ref}>
      <button className="close-btn" ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <div className="modal-header">
        <h1>Title</h1>
      </div>
      <div className="modal-body">Do you confirm?</div>
      <div className="modal-footer">
        <button className="confirm-btn" ref={confirmRef} onClick={onClose}>
          Yes
        </button>
        <button className="deny-btn" ref={denyRef} onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
}

export default React.forwardRef(ConfirmationModal);
