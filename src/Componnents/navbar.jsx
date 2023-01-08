import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <nav className="bg-brand text-dark font-bold py-2 px-4  flex items-center justify-between">
        <div className="text-xl lg:flex-grow">TimeSlayer</div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="block float-right lg:hidden rounded-full px-3 py-1 border border-white text-dark hover:bg-gray-800"
          onClick={handleClick}
        >
          Menu
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">

            <ul className="text-sm flex flex-col md:flex-row md:space-x-8 md:text-lg">
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/pomodoro">Work</Link>
              </li>
              <li>
                {" "}
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
            {/* <a className="block mt-4 lg:inline-block lg:mt-0 text-brand no-underline hover:text-gray-300" href="#">Home</a>
          <a className="block mt-4 lg:inline-block lg:mt-0 text-brand no-underline hover:text-gray-300" href="#">Pomodoro</a>
          <a className="block mt-4 lg:inline-block lg:mt-0 text-brand no-underline hover:text-gray-300" href="#">Settings</a> */}
          </div>
      </nav>
    </>
  );
};

export default Navbar;



