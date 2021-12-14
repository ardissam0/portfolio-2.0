import React from 'react';
import { CgCloseR } from "react-icons/cg";

const Modal = ({ children, show, setShow }) => {
  const content = show && (
    <div className="overlay">
      <div className="modal">
        <button
          className="modal-close"
          type="button"
          onClick={() => setShow(false)}
        >
          <CgCloseR/>
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )

  return content
}

export default Modal;