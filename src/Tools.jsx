import React from "react"
import { Volume } from "./Volume"
import { Power } from "./Power"
import { Display } from "./Display"
import { BankSwitch } from "./BankSwitch"

export const Tools = ({ checkedPower, setPower, display, volume, handleChangeVolume, checkedBank, setBank }) => {
  return (

    <div className="tools">
      <Power checkedPower={checkedPower} setPower={setPower} />
      <Display display={display} />
      <Volume volume={volume} handleChangeVolume={handleChangeVolume} />
      <BankSwitch checkedBank={checkedBank} setBank={setBank} />
    </div>
  )
}