import React, { useState, useEffect, useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ButtonSession from "./buttonSession";
import { TimersContext } from "../context/TimerContext";
const Countdown = ({ timer, onComplete }) => {
  const { session } = useContext(TimersContext);

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
     return <div className="text-3xl text-light text-bold">{(seconds < 10) ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`}</div>
  }
const handleColor=()=>{
  switch (session) {
      case 'work':
          return [['#73AB84']]

      case 'shortBreak':
          return [['#E57A44']]

      case 'longBreak':
          return [['#155E75']]

      default:
          break;
  }
}

  return (
    <div className="flex flex-col items-center justify-between  p-4">

      <CountdownCircleTimer
        
        isPlaying={isRunning}
        duration={timer}
        key={key}
        colors={handleColor()}
      >
        {children}
        </CountdownCircleTimer>
      <div className="flex justify-between mt-5 ">
        <ButtonSession className={`mr-4 bg-mid`} handleClick={startTimer} name='Start' />
        <ButtonSession className={`mx-4 bg-mid`} handleClick={stopTimer} name='Stop' />
        <ButtonSession className={`ml-4 bg-mid`} handleClick={resetTimer} name='Reset' />
      </div>
    </div>
  );
};

export default Countdown;
