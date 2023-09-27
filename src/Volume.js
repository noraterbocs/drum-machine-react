import React from 'react';

export const Volume = ({volume, handleChangeVolume}) => {
    return (
   <div>
        <input
          type="range"
          className="form-range"
          id="customRange1"
          min="1"
          max="100"
          default="50"
          step="5"
          value={volume}
          onChange={handleChangeVolume}
        />
      </div>
    );
}