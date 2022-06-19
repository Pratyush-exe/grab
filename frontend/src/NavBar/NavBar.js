import React from 'react'

function Nav() {
  return (
    <div className='h-5vh'  style={{backgroundColor: "white"}}>
      <nav className="">
        <div className="flex flex-row items-center w-screen justify-between p-4">
          <div className="flex items-baseline space-x-4">
            <a
              href="#"
              className=" cursor-pointer text-red rounded-md text-3xl px-5 font-black outline-1">
              grrrab
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-black font-bold hover:border-2 hover:border-black rounded-md text-sm px-5 py-2">
              WHY?
            </a>
            <a
              href="#"
              className="text-black font-bold hover:border-2 hover:border-black rounded-md text-sm px-5 py-2">
              CODE
            </a>
            <a
              href="#"
              className="text-black font-bold hover:border-2 hover:border-black hover:bg-yellow-300 rounded-md text-sm px-5 py-2">
              VENDOR
            </a>
          </div>
        </div>
      </nav>

    </div>
  );
}
export default Nav;
