import React, { useEffect, useState } from "react";
import Navbar from "./Componnents/navbar";
import Countdown from "./Componnents/countdown";
import CountdownWrapper from "./Componnents/countdownWrapper";

export default function App() {
  const [duration, setDuration] = useState(5);
  const [count, setCount] = useState(0);
  const [session, setSession] = useState('work');

  const handleWorkClick = () => {
    setDuration(5);
    setSession('work');
  };

  const handleShortBreakClick = () => {
    setDuration(3);
    setSession('shortBreak');
  };

  const handleLongBreakClick = () => {
    setDuration(8);
    setSession('longtBreak');
  };

  
  const handleCountdownComplete = () => {
    if(session === "work")
      setCount((count) => count + 1);
    console.log('click');
  };

  
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline text-center mt-6" >
        Hello twitter! let's see what GPT can do
      </h1>
      <CountdownWrapper>
        <Countdown timer={duration} onComplete={handleCountdownComplete}  />
      </CountdownWrapper>
      <div className="flex justify-center mt-10">
      <button
        onClick={handleWorkClick}
        className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold"
      >
        Let's work
      </button>
      <button
        onClick={handleShortBreakClick}
        className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold"
      >
        Short break
      </button>
      <button
        onClick={handleLongBreakClick}
        className="px-4 py-2 rounded-full bg-blue-500 text-white font-bold"
      >
        Long break
        </button>
      </div>
      <div>
      <p>Count: {count}</p>
    </div>
    </>
  );
}
