import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ButtonSession from "./buttonSession";
const Countdown = ({ timer, onComplete }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [key, setKey] = useState(0)
  


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
    setIsRunning(false);
    setKey(prevKey => prevKey + 1)
  };


  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    useEffect(() => {
      if (remainingTime === 0) {
        onComplete();
        return (
          clearInterval(remainingTime)
        );
      }
    }, [remainingTime]);
      return  (seconds < 10) ?`${minutes}:0${seconds}`:`${minutes}:${seconds}`
}


  return (
    <div className="flex flex-col items-center justify-between p-4">

      <CountdownCircleTimer
        isPlaying={isRunning}
        duration={timer}
        key={key}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}>
        {children}
        </CountdownCircleTimer>
      <div className="flex justify-between mt-5 flex-grow flex-shrink">
        <ButtonSession handleClick={startTimer} name='Start' />
        <ButtonSession handleClick={stopTimer} name='Stop' />
        <ButtonSession handleClick={resetTimer} name='Reset' />
      </div>
    </div>
  );
};

export default Countdown;
