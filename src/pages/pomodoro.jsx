import React, { useContext, useState } from "react";
import Countdown from "../Componnents/countdown";
import CountdownWrapper from "../Componnents/countdownWrapper";
import ButtonSession from "../Componnents/buttonSession";
import { TimersContext } from "../context/TimerContext";

const PomodoroPage = () => {
  const { timers, session, setSession } = useContext(TimersContext);

  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(timers.workTimer);
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
    setSession("longBreak");
  };
  const handleCountdownComplete = () => {
    var sound = new Audio("/gong1.mp3");
    if (session === "work") setCount((count) => count + 1);
    sound.volume = 0.5;
    sound.play();
  };
  
  const background = (session) => {
    switch (session) {
      case "work":
        return "from-brand to-dark   ";
      case "shortBreak":
        return "from-break ";
      case "longBreak":
        return "from-coffee ";
      default:
        break;
    }
  };
  return (
    <div className={` min-h-screen  bg-gradient-to-r ${background(session)}`}>
      <div className="text-3xl text-center text-brand">
        
      {session === "work" ? (
          <h1 className="py-10 font-bold ">Let's Focus</h1>
        ) : session === "shortBreak" ? (
          <h1 className="py-10 font-bold "> Small Break</h1>
        ) : (
          <h1 className="py-10 font-bold ">Coffee Time</h1>
        )}
      </div>
      <div className="flex w-64 md:w-96 mx-auto    my-10">
        <ButtonSession
          className={`mr-4 ${session == "work" ? "bg-brand" : "bg-dark"}`}
          handleClick={handleWorkClick}
          name="Let's work"
        />
        <ButtonSession
          className={`mx-4 ${session == "shortBreak" ? "bg-brand" : "bg-dark"}`}
          handleClick={handleShortBreakClick}
          name="Short break"
        />
        <ButtonSession
          className={`ml-4 ${session == "longBreak" ? "bg-brand" : "bg-dark"}`}
          handleClick={handleLongBreakClick}
          name="Long Break"
        />
      </div>
      <Countdown timer={timer} onComplete={handleCountdownComplete} />
      <div className="text-2xl text-center text-light mt-10">
        {count >= 4 && <p>Congratulation :D</p>}
        {count == 1 && (
          <p>During this session you've done: {count} work period</p>
        )}
        {count > 1 && (
          <p>During this session you've done: {count} work periods</p>
        )}
      </div>
    </div>
  );
};

export default PomodoroPage;
