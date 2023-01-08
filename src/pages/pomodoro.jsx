import React, { useEffect, useState } from "react";
import Countdown from "../Componnents/countdown";
import CountdownWrapper from "../Componnents/countdownWrapper";
import ButtonSession from "../Componnents/buttonSession";

const Pomodoro = () => {
 
      const [duration, setDuration] = useState(5);
      const [count, setCount] = useState(0);
      const [session, setSession] = useState('work');
    
      const handleWorkClick = () => {
        setDuration(5);
        setSession('work');
      };
    
      const handleShortBreakClick = () => {
        setDuration(25);
        setSession('shortBreak');
      };
    
      const handleLongBreakClick = () => {
        setDuration(30);
        setSession('longtBreak');
      };
    
      
      const handleCountdownComplete = () => {
        if(session === "work")
          setCount((count) => count + 1);
        console.log('click');
      };
    
      
      return (
        <>
          <CountdownWrapper>
            <Countdown timer={duration} onComplete={handleCountdownComplete}  />
          </CountdownWrapper>
          <div className="flex justify-center mt-10">
          <ButtonSession handleClick={handleWorkClick} name="Let's work" />
          <ButtonSession handleClick={handleShortBreakClick} name='Short break' />
          <ButtonSession handleClick={handleLongBreakClick} name='Long Break' />
          </div>
          <div>
          <p>Count: {count}</p>
          </div>
        </>
      );
    }
    

export default Pomodoro