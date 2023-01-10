import React, {useState} from "react";
import { TimersContext } from "./TimerContext";

function TimersProvider({ children }) {
  const [timers, setTimers] = useState({
    workTimer: 25 * 60,
    shortBreakTimer: 5 * 60,
    longBreakTimer: 15 * 60,
  });

  return (
    <TimersContext.Provider value={{ timers, setTimers }}>
      {children}
    </TimersContext.Provider>
  );
}

export default TimersProvider;
