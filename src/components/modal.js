import React from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import "./styles/modal.css";

function Modal({ id = 'modal', onClose = (props) => {}, children }) {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <CloseButton className="close" variant="white" onClick={onClose} />
        <div className="content"> {children} </div>
      </div>
    </div>
  );
}

export default Modal;
