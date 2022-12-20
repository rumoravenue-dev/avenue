import React from "react";
import "./styles/modal.css"

function Modal({ id = 'modal', onClose = (props) => {}, children }) {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <button className="close" onClick={onClose}>close</button>
        <div className="content"> {children} </div>
      </div>
    </div>
  );
}

export default Modal;
