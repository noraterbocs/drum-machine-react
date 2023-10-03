import React from 'react';

export const Volume = ({ volume, handleChangeVolume }) => {
  return (
    <div>
      <input
        type="range"
        className="form-range"
        id="customRange1"
        min="1"
        max="100"
        step="1"
        value={volume}
        onChange={handleChangeVolume}
      />
    </div>
  );
}