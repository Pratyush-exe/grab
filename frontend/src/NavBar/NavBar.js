import React from 'react'

function Nav() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="flex flex-row items-center w-screen justify-between p-4">
          <div className="flex items-baseline space-x-4">
            <a
              href="#"
              className=" cursor-pointer text-white rounded-md text-lg px-5">
              GRRAB
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium px-5 py-2">
              WHY?
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium px-5 py-2">
              CODE
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 bg-gray-500 hover:text-white rounded-md text-sm font-medium px-5 py-2">
              VENDOR
            </a>
          </div>
        </div>
      </nav>

    </div>
  );
}
export default Nav;
