import React, { useState, useEffect } from "react";

const Countdown = ({ timer, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(timer);
  const [isRunning, setIsRunning] = useState(false);
  let intervalId = null;
  
// useEffect to manage the countdown
  useEffect(() => {
    if (timeLeft === 0) {
      // Increment the count
      onComplete();
    }
  if (isRunning) {
    intervalId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  } 
  return () => clearInterval(intervalId);
}, [timeLeft, isRunning]);

useEffect(() => {
  resetTimer()
  return () => {
    // Stop the timer when the component unmounts
    clearInterval(timer);
  };
}, [timer])
  
  


  // Handling button
  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(timer);
    setIsRunning(false);
    
  };
 
// Define totalSeconds and timeLeftSeconds variables
let totalSeconds = Math.abs(timeLeft);
let timeLeftSeconds = totalSeconds;

// Calculate the number of minutes and seconds remaining
const minutes = Math.floor(timeLeftSeconds / 60);
timeLeftSeconds %= 60;
const seconds = timeLeftSeconds;
  

  

  return (
    <div className="flex flex-col items-center justify-between p-4">
      <h1 className="text-5xl font-bold flex-grow flex-shrink">
       {(timeLeft < 0) ? "-" : ""} {minutes}:{seconds.toString().padStart(2, "0")}
      </h1>
      <div className="flex justify-between flex-grow flex-shrink">
        <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold" onClick={startTimer}>Start</button>
        <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold" onClick={stopTimer}>Stop</button>
        <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold" onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Countdown;
