/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import data from './data/data.json'
import { Bank } from './Bank';
import { Tools } from './Tools';

export const Setup = () => {
  const [checkedBank, setCheckedBank] = useState(false);
  const [currentBank, setCurrentBank] = useState(data.bankOne);
  const [checkedPower, setCheckedPower] = useState(true);
  const [display, setDisplay] = useState("Heater Kit");
  const [volume, setVolume] = useState(10);
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
    setDisplay(`Volume: ${e.target.value}%`);
    setVolume(e.target.value);
  };

  const handleEvent = (e) => {
    if (!checkedPower) {
      console.log("power turned off");
      return;
    } else {
      console.log(e.target.id)
      const soundBank = currentBank.find(
        (bank) =>
          e.target.childNodes[0].id === bank.keyTrigger
          ||
          e.key === bank.keyTrigger.toLowerCase()
      );
      console.log(soundBank);
      if (soundBank) {
        setDisplay(soundBank.id);
        const sound = audioRef.current[soundBank.keyTrigger];
        sound.volume = volume / 100
        console.log(sound)
        sound.play();
      } else {
        alert('You clicked the wrong key!')
      }
    }
    e.target.blur();
  };
  useEffect(() => {
    if (audioRef) {
      console.log(audioRef.current)
      console.log(audioRef)
      audioRef.volume = volume
    }
  }, [volume]);

  useEffect(() => {
    document.addEventListener('keyup', handleEvent);
    return () => {
      document.removeEventListener('keyup', handleEvent);
    };
  }, []);

  return (

    <div id="drum-machine" className='display'>
      <Bank currentBank={currentBank} handleEvent={handleEvent} audioRef={audioRef} />
      <Tools checkedPower={checkedPower} setPower={setPower} display={display} volume={volume} handleChangeVolume={handleChangeVolume} checkedBank={checkedBank} setBank={setBank} />
    </div>

  );
}

