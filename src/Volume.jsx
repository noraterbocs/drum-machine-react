import { Slider } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';

export const Volume = ({ volume, handleChangeVolume }) => {
  return (
    <div className='volume-wrapper'>
      <Slider
        aria-label="Volume"
        min={1}
        max={100}
        step={1}
        valueLabelDisplay="auto"
        value={volume}
        aria-labelledby="input-slider"
        sx={{
          color: pink[600]
        }}
        onChange={handleChangeVolume}
      />
    </div>
  );
}