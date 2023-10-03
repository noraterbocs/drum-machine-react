import React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

export const Power = ({ checkedPower, setPower }) => {
  return (
    <div>
      <Checkbox
        aria-label='Power'
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
        checked={checkedPower}
        onChange={setPower}
      />
      <label>
        Power
      </label>
    </div>
  );
}