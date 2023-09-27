import React from 'react';

export const Display = ({ display }) => {
  return (
    <div className='display-container'>
      <p className="display" id="display">
        {display}
      </p>
    </div>
  );
}

