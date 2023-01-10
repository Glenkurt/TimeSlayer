import React, { useContext, useState } from "react";
import Countdown from "../Componnents/countdown";
import CountdownWrapper from "../Componnents/countdownWrapper";
import ButtonSession from "../Componnents/buttonSession";
import { TimersContext } from "../context/TimerContext";

const PomodoroPage = () => {
  const { timers } = useContext(TimersContext);
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(timers.workTimer);
  const [session, setSession] = useState("work");
  const handleWorkClick = () => {
    setTimer(timers.workTimer);
    setSession("work");
  };

  const handleShortBreakClick = () => {
    setTimer(timers.shortBreakTimer);
    setSession("shortBreak");
  };

  const handleLongBreakClick = () => {
    setTimer(timers.longBreakTimer);
    setSession("longtBreak");
  };
  const handleCountdownComplete = () => {
    if (session === "work") setCount((count) => count + 1);
    console.log("click");
  };

  return (
    <>
      <div className="text-3xl text-center text-brand">
        {session === "work" ? (
          <h1>Let's Focus</h1>
        ) : session === "shortBreak" ? (
          <h1> Small Break</h1>
        ) : (
          <h1>Coffee Time</h1>
        )}
      </div>
      <CountdownWrapper>
        <Countdown timer={timer} onComplete={handleCountdownComplete} />
      </CountdownWrapper>
      <div className="flex justify-center mt-10">
        <ButtonSession handleClick={handleWorkClick} name="Let's work" />
        <ButtonSession handleClick={handleShortBreakClick} name="Short break" />
        <ButtonSession handleClick={handleLongBreakClick} name="Long Break" />
      </div>
      <div className="text-2xl text-center">
        {count >= 4 && <p>Congratulation :D</p>}
        { count == 1 && <p>During this session you've done: {count} work period</p>
        }
        { count > 1 && <p>During this session you've done: {count} work periods</p>
        }
      </div> 
    </>
  );
};

export default PomodoroPage;
