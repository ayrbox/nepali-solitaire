import React, { useState, useEffect } from 'react';

interface TimeState {
  min: number;
  sec: number;
}

const calculateTime = ({ min, sec }: TimeState): TimeState => {
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

const padNumber = (num: number, padLength: number = 2): string => `${num}`.padStart(padLength, '0');

interface TimerProps {
  stop: boolean;
}

const Timer: React.FC<TimerProps> = ({ stop }) => {
  const [time, setTime] = useState<TimeState>({
    min: 0,
    sec: 0,
  });

  const { min, sec } = time;

  useEffect(() => {
    let timerHandler: NodeJS.Timeout;
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
