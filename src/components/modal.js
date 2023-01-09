import React from "react";
import "./styles/modal.css";

function Modal({ id = 'modal', onClose = (props) => { }, children }) {


  return (
    <div id={id} className="modal" onClick={() => onClose()}>
      <div className="container">
        <div className="content"> {children} </div>
      </div>
    </div>
  );
}

export default Modal;

