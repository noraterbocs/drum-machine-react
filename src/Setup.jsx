import React, { useEffect, useRef, useState } from 'react'
import data from './data/data.json'
import { Bank } from './Bank';
import { Tools } from './Tools';

export const Setup = () => {
  const [checkedBank, setCheckedBank] = useState(false);
  const [currentBank, setCurrentBank] = useState(data.bankOne);
  const [checkedPower, setCheckedPower] = useState(true);
  const [display, setDisplay] = useState("Heater Kit");
  const [volume, setVolume] = useState(30);
  const audioRef = useRef({});
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
          e.code === `Key${bank.keyTrigger}`
      );
      console.log(soundBank);
      setDisplay(soundBank.id);
      const sound = audioRef.current[soundBank.keyTrigger];
      console.log(sound)
      if (sound) {
        sound.play();
      }
    }
  };
  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  return (

    <div id="drum-machine">
      <Bank currentBank={currentBank} handleEvent={handleEvent} audioRef={audioRef} />
      <Tools checkedPower={checkedPower} setPower={setPower} display={display} volume={volume} handleChangeVolume={handleChangeVolume} checkedBank={checkedBank} setBank={setBank} />
    </div>

  );
}

