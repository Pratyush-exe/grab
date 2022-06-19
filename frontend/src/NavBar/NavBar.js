import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="h-5vh bg-white max-w-6xl mx-auto flex flex-row items-center w-screen justify-between p-4">
      <div className="flex items-baseline space-x-4">
        <Link
          to="/"
          className=" cursor-pointer text-red rounded-md text-3xl px-5 font-black outline-1"
        >
          grrrab
        </Link>
      </div>
      <div>
        <Link
          to="#"
          className="text-black font-bold hover:border-2 hover:border-black rounded-md text-sm px-5 py-2"
        >
          WHY?
        </Link>
        <a
          href="https://github.com/vasudutt/grab"
          rel="noreferrer"
          target={'_blank'}
          className="text-black font-bold hover:border-2 hover:border-black rounded-md text-sm px-5 py-2"
        >
          CODE
        </a>

        <Link
          to="/about"
          className="text-black font-bold hover:border-2 hover:border-black rounded-md text-sm px-5 py-2"
        >
          ABOUT
        </Link>

        <Link
          to="/vendor"
          className="text-black font-bold hover:border-2 hover:border-black hover:bg-yellow-300 rounded-md text-sm px-5 py-2"
        >
          VENDOR
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
