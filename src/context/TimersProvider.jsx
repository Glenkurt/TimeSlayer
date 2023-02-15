import React, {useState} from "react";
import { TimersContext } from "./TimerContext";

function TimersProvider({ children }) {
  const [timers, setTimers] = useState({
    workTimer: 25 * 60,
    shortBreakTimer: 5 * 60,
    longBreakTimer: 15 * 60,
  });
  const [session, setSession] = useState('work')
  return (
    <TimersContext.Provider
      value={{
        timers,
        setTimers,
        session,
        setSession
      }}>
      {children}
    </TimersContext.Provider>
  );
}

export default TimersProvider;
