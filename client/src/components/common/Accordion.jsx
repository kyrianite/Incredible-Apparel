import React, { useState } from 'react';

export default function Accordion({ question, children }) {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>{question}</div>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => setIsActive(!isActive)}
        >
          <i
            className={
              isActive ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'
            }
          />
        </div>
      </div>

      <div className={isActive ? 'expanded' : 'collapsed'}>
        {isActive && children}
      </div>
    </div>
  );
}
