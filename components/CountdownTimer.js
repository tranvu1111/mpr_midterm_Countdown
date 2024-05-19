import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ value, onFinish }) => {
  const [remainingTime, setRemainingTime] = useState(value);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(intervalId);
        if (onFinish) {
          onFinish(); // Optional callback function when countdown finishes
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingTime]);

  return null; // This component doesn't render any UI by itself
};

export default CountdownTimer;
