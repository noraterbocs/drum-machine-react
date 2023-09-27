/* eslint-disable react/jsx-key */
import React from "react";
import { Button } from "./Button";
export const Bank = ({ currentBank, handleEvent, audioRef }) => {
  return (

    <div className="drum-display">
      {currentBank.map((bank) => {
        return (
          <Button key={bank.id} bank={bank} handleEvent={handleEvent} audioRef={audioRef} />
        );
      })}
    </div>
  );
}
