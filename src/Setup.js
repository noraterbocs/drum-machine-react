import {useEffect, useRef, useState} from 'react'
import data from './data/data.json'
import { Bank } from './Bank';
import { Tools } from './Tools';

export const Setup=()=> {
  const [btnValues, setBtnValues] = useState("");
  const [checkedBank, setCheckedBank] = useState(false);
  const [currentBank, setCurrentBank] = useState(data.bankOne);
  const [checkedPower, setCheckedPower] = useState(true);
  const [display, setDisplay] = useState("Heater Kit");
  const [volume, setVolume] = useState(30);
   const audioRef = useRef();
  const setBank = () => {
    setCheckedBank(!checkedBank);
    if (!checkedBank) {
      setCurrentBank(data.bankTwo);
      setDisplay("Smooth Piano Kit");
      console.log(currentBank);
    } else {
      setCurrentBank(data.bankOne);
      setDisplay("Heater Kit");
      console.log(currentBank);
    }
  };
  const setPower = () => {
    setCheckedPower(!checkedPower);
    if (checkedPower) {
      setDisplay("Power: OFF");
    } else {
      setDisplay("Power: ON");
    }
  };
  const handleChangeVolume = (e) => {
    setDisplay(`Volume: ${e.target.value}`);
    setVolume(e.target.value);
  };
  const handleEvent = (e) => {
    if (!checkedPower) {
      console.log("power turned off");
      return;
    } else {
      const soundBank = currentBank.find(
        (bank) =>
          e.target.childNodes[0].id === bank.keyTrigger ||
          e.key === bank.keyTrigger.toLowerCase()
      );
      console.log(soundBank);
      const sound = document.getElementById(soundBank.keyTrigger);
      console.log(sound);
      const display = document.getElementById(soundBank.id);
      sound.play();
      setDisplay(display.id);
      console.log(`Pressed: ${display.id} - ${soundBank.keyCode}`);
      sound.volume = document.getElementById("customRange1").value / 100;
    }
  };
  useEffect(() => {
  if (audioRef) {
    audioRef.current.volume = volume / 100;
  }
}, [volume, audioRef]);

  return (

                  <div>
                    <Bank currentBank={currentBank} handleEvent={handleEvent} audioRef={audioRef} />
                    <Tools checkedPower={checkedPower} setPower={setPower} display={display} volume={volume} handleChangeVolume={handleChangeVolume} checkedBank={checkedBank} setBank={setBank} />
                  </div>
             
  );
}
