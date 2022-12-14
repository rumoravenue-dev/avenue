import React, { useState } from 'react';
import "./styles/accordion.css"

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordionItem">
      <div className="accordionTitle" onClick={() => setIsActive(!isActive)}>
        <div className='title'>{title}</div>
        <div className='icon'><strong>{isActive ? '-' : '+'}</strong></div>
      </div>
      {isActive && <div className="accordionContent">{content}</div>}
    </div>
  );
};

export default Accordion;