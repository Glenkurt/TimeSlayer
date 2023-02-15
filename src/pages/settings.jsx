import React, { useContext } from "react";
import ButtonSession from "../Componnents/buttonSession";
import { TimersContext } from "../context/TimerContext";
import { Link } from "react-router-dom";

function SettingsPage() {
  const { timers, setTimers } = useContext(TimersContext);
  return (
    <section className="w-full min-h-screen text-light bg-gradient-to-l from-dark to-mid">
      <h1 className="text-3xl text-center font-bold text-brand py-10">Settings</h1>
      <div className="flex flex-col items-center mt-3   shadow-slate-500 	">
        <label className="text-gray-700 font-bold mb-2">Work Timer:</label>
        <div>
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-dark leading-tight w-24 focus:outline-none focus:shadow-outline"
            type="number"
            value={(timers.workTimer / 60).toString()}
            onChange={(e) =>
              setTimers({ ...timers, workTimer: e.target.value * 60 })
            }
          />
          <label> minutes</label>
        </div>
        <label className="text-gray-700 font-bold mt-4 mb-2">
          Short Break Timer:
        </label>
        <div>
          <input
            className="shadow  border rounded  py-2 px-3 w-24 text-dark leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={(timers.shortBreakTimer / 60).toString()}
            onChange={(e) =>
              setTimers({ ...timers, shortBreakTimer: e.target.value * 60 })
            }
          />
          <label> minutes</label>
        </div>
        <label className="text-gray-700 font-bold mt-4 mb-2">
          Long Break Timer:
        </label>
        <div>
          <input
            className="shadow appearance-none border rounded w-24  py-2 px-3 mb-6 text-dark leading-tight bg-transparent focus:outline-none focus:shadow-outline"
            type="number"
            value={(timers.longBreakTimer / 60).toString()}
            onChange={(e) =>
              setTimers({ ...timers, longBreakTimer: e.target.value * 60 })
            }
          />
          <label> minutes</label>
        </div>

        <Link className="mx-auto mt-10" to="/pomodoro">
          <ButtonSession className="bg-brand" name="Validate" />
        </Link>
      </div>
    </section>
  );
}

export default SettingsPage;
