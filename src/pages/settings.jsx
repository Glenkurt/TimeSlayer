import React, { useContext } from "react";
import ButtonSession from "../Componnents/buttonSession";
import { TimersContext } from "../context/TimerContext";
import { Link } from "react-router-dom";

function SettingsPage() {
  const { timers, setTimers } = useContext(TimersContext);
  return (
    <section className="container h-full">
      <h1 className="text-3xl text-center mt-3">Settings</h1>
      <div className="flex flex-col w-1/3 mt-3    mx-auto 	">
        <label className="text-gray-700 font-bold mb-2">Work Timer:</label>

        <div>
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={timers.workTimer / 60}
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
            className="shadow  border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={timers.shortBreakTimer / 60}
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
            className="shadow appearance-none border rounded  py-2 px-3 mb-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            value={timers.longBreakTimer / 60}
            onChange={(e) =>
              setTimers({ ...timers, longBreakTimer: e.target.value * 60 })
            }
          />
          <label> minutes</label>
        </div>

        <Link className="mx-auto" to="/pomodoro">
          <ButtonSession name="Validate" />
        </Link>
      </div>
    </section>
  );
}

export default SettingsPage;
