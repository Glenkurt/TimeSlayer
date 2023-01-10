import React, { useState } from 'react';

function FocusTimerSlider() {
  const [focusTimer, setFocusTimer] = useState(25);

  const handleChange = (event) => {
    setFocusTimer(event.target.value);
  };

  return (
    <div className="relative w-full h-12 mt-2 rounded-md shadow-inner">
      <div className="absolute inset-0 flex items-center">
        <span className="h-full w-1 rounded-l-md bg-gray-300"></span>
        <span className="h-full w-1 rounded-r-md bg-gray-300"></span>
      </div>
      <input
        type="range"
        min="5"
        max="60"
        step="5"
        value={focusTimer}
        onChange={handleChange}
        className="w-full h-full appearance-none rounded-md cursor-pointer bg-transparent outline-none focus:outline-none"
      />
    </div>
  );
}

export default FocusTimerSlider;
