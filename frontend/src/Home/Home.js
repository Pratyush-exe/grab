import React, { useState, useEffect } from 'react'
import MapBox from './MapBox'
import {IoIosArrowDown} from 'react-icons/io'

function Home() {
    let imgUrl = "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9555.jpg"

    let listOfRestaurants = ["wfdfdsffffsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", 
    "wfdfdsffffsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", 
    "wfdfdsffffsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", 
    "wfdfdsffffsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", "wfdfdsf", ] // get from api

    return (
        <div className='h-95vh flex flex-row justify-center items-center'  style={{backgroundColor: "white"}}>
            <MapBox markers={listOfRestaurants} curLoc={JSON.parse(localStorage.getItem("posList"))} />
            <div className='h-95vh w-3/12' style={{padding: "3px", backgroundColor: "white"}}>
                <div className='rounded-xl flex flex-col h-95vh border-black border-4'>
                    <h3 className='text-center m-3 font-bold text-2xl'>Food Availability</h3>
                    <div className='overflow-y-scroll scrollbar-thin h-auto'>
                        {listOfRestaurants.map((mark, index) => (
                            <div key={index} className="border-4 border-black m-3 my-4 p-2 overflow-x-clip rounded-3xl flex flex-col justify-between"
                                style={{backgroundColor: "#ffdb18", height: "150px"}}>
                                <div className='flex flex-row'>
                                    <img className='h-1 rounded-full border-2 border-black' src={imgUrl}
                                        style={{height: "70px", width: "70px", objectFit: "cover"}}></img>
                                    <div className='m-auto'>
                                        <h1 className='font-bold text-xl'>Dominos India</h1>
                                        <p className='text-sm'>Bhubaneswar | Odisha | India</p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between px-2'>
                                    <p className='font-bold'>Availability</p>
                                    <p>3 pieces</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-row justify-center rounded-xl'>
                        <IoIosArrowDown className='h-5 text-black' />
                    </div>
                </div>
                {/* <div className='flex flex-col justify-evenly h-100px mt-2'>
                    <div className=' flex flex-row justify-between'>
                        <input id="inputLong" type="" placeholder='Longitude' className='h-30px border-black rounded-md border pl-1 w-5' ></input>
                        <input id="inputLat" type="text" placeholder='Latitude' className='h-30px border-black rounded-md border pl-1 w-5' ></input>
                    </div>
                    <button type='submit' className='rounded-xl bg-orange-500 h-45px' onClick={() => {
                        console.log([
                            parseFloat(document.getElementById("inputLong").value),
                            parseFloat(document.getElementById("inputLat").value)
                        ])
                        localStorage.setItem("posList", JSON.stringify([
                            parseFloat(document.getElementById("inputLong").value),
                            parseFloat(document.getElementById("inputLat").value)
                        ]))
                        console.log("here")
                        setLoading(!loading)
                    }}>Load Location</button>
                </div> */}
            </div>
        </div>
    )
}

export default Home