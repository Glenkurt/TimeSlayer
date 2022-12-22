import React, {useState} from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-red-500 text-white font-bold py-2 px-4 rounded flex items-center justify-between">
      <div className="text-xl lg:flex-grow">
        Pomodoro
      </div>
      <button
        className="block float-right lg:hidden rounded-full px-3 py-1 border border-white text-white hover:bg-gray-800"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'}  lg:flex lg:items-center`}>
        <div className="text-sm lg:flex-grow">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-white no-underline hover:text-gray-300" href="#">About</a>
          <a className="block mt-4 lg:inline-block lg:mt-0 text-white no-underline hover:text-gray-300 ml-4" href="#">Settings</a>
          <a className="block mt-4 lg:inline-block lg:mt-0 text-white no-underline hover:text-gray-300 ml-4" href="#">Loggin</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
