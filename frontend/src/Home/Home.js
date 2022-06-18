import React from 'react'
import MapBox from './MapBox'
import {IoIosArrowDown} from 'react-icons/io'

function Home() {

    let listOfRestaurants = ["wfdfdsffffsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", 
    "wfdfdsffffsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", 
    "wfdfdsffffsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", 
    "wfdfdsffffsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", ] // get from api

    return (
        <div className='h-screen w-screen flex flex-row justify-center items-center'>
            <MapBox markers={listOfRestaurants} />
            <div className='h-500px bg-slate-700 ml-5 rounded-xl w-400px flex flex-col'>
                <h3 className='text-center m-3'>Availability</h3>
                <div className='bg-slate-700w-400px overflow-y-scroll scrollbar-thin h-auto'>
                    {listOfRestaurants.map((mark, index) => (
                        <div key={index} className="border border-white m-3 my-4 p-2 overflow-x-clip rounded-md">
                            {mark}
                        </div>
                    ))}
                </div>
                <div className='flex flex-row justify-center bg-gradient-to-t from-slate-800 rounded-xl'>
                    <IoIosArrowDown className='h-5 text-white' />
                </div>
            </div>
        </div>
    )
}

export default Home