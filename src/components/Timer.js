import React, { useState, useEffect } from 'react';

const calculateTime = ({ min, sec }) => {
  if (sec + 1 === 60) {
    return {
      min: min + 1,
      sec: 0,
    };
  } else {
    return {
      min,
      sec: sec + 1,
    };
  }
};

const padNumber = (num, padLength = 2) => `${num}`.padStart(padLength, '0');

const Timer = ({ stop }) => {
  const [time, setTime] = useState({
    min: 0,
    sec: 0,
  });

  const { min, sec } = time;

  useEffect(() => {
    let timerHandler;
    if (!stop) {
      timerHandler = setInterval(() => {
        setTime(prev => calculateTime(prev));
      }, 1000);
    } else {
      clearInterval(timerHandler);
    }

    return () => {
      clearInterval(timerHandler);
    };
  }, [stop]);

  return (
    <h1>
      {padNumber(min)}:{padNumber(sec)}
    </h1>
  );
};

export default Timer;
