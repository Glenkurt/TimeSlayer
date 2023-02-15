import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-dark  ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl  font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-brand"
              href="/"
            >
              Time Slayer
            </a>
            <button
              className="text-brand cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Menu
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow " +
              (navbarOpen ? " flex  " : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                {/* <a
                  className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-brand hover:opacity-75"
                  href="/"
                > */}
                  <Link className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-brand hover:opacity-75" to="/" onClick={() => setNavbarOpen(!navbarOpen)}>
                  Home
                    </Link>
                  
                {/* </a> */}
              </li>
              <li className="nav-item">
              <Link className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-brand hover:opacity-75" to="/pomodoro" onClick={() => setNavbarOpen(!navbarOpen)}>

                  Pomodoro{" "}
               </Link>
              </li>
              <li className="nav-item">
              <Link className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-brand hover:opacity-75" to="/settings" onClick={() => setNavbarOpen(!navbarOpen)}>

                  Settings{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
