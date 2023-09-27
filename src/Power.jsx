import React from 'react';

export const Power = ({checkedPower, setPower}) => {
    return (
        <div>
        <input
          type="checkbox"
          id="flexSwitchCheckDefault"
          checked={checkedPower}
          onChange={setPower}
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault"
        >
          Power
        </label>
      </div>
    );
}