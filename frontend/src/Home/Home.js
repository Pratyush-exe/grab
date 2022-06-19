import React, { useRef } from 'react'
import MapBox from './MapBox'
import {IoIosArrowDown} from 'react-icons/io'

function Home() {
    let imgUrl = "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9555.jpg"
    let ref = useRef(null)

    let data = [] //get from api

    let listOfRestaurants = ["Dominos", "KFC India", "Subway", "Keventers", "Palace Restaurant",
                            "Dominos", "KFC India", "Subway", "Keventers", "Palace Restaurant"]

    let testFood = [["Pizza", "2"], ["Burger", "3"], ["Pasta", "3 plates"], ["Taco", "4"]]

    return (
        <div className='h-95vh flex flex-row justify-center items-center'  style={{backgroundColor: "white"}}>
            <MapBox markers={listOfRestaurants} curLoc={JSON.parse(localStorage.getItem("posList"))} />
            <div className='h-95vh w-3/12' style={{padding: "3px", backgroundColor: "white"}}>
                <div className='rounded-xl flex flex-col h-95vh border-black border-4'>
                    <h3 className='text-center m-3 font-bold text-2xl'>Food Availability</h3>
                    <div className='overflow-y-scroll scrollbar-thin h-auto'>
                        {listOfRestaurants.map((mark, index) => { 
                            console.log(index)
                            return (
                            <div key={index} id={`foodItem_${index}`} className="border-4 border-black m-3 my-4 p-2 overflow-x-clip rounded-3xl flex flex-col justify-between"
                                style={{backgroundColor: "#ffdb18", height: "auto", cursor: "pointer"}}
                                onClick={(e) => {
                                    let avail = document.getElementById(`foodItem_${index}_avail`)
                                    let list = document.getElementById(`foodItem_${index}_list`)
                                    list.style.display == "none" ? list.style.display = "block" : list.style.display = "none"
                                    avail.style.display == "none" ? avail.style.display = "flex" : avail.style.display = "none"
                                }}
                                ref={ref}>
                                <div className='flex flex-row mb-4'>
                                    <img className='h-1 rounded-full border-2 border-black' src={imgUrl}
                                        style={{height: "70px", width: "70px", objectFit: "cover"}}></img>
                                    <div className='my-auto ml-3'>
                                        <h1 className='font-bold text-xl'>{mark}</h1>
                                        <p className='text-sm'>Bhubaneswar | Odisha | India</p>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between px-2' id={`foodItem_${index}_avail`}>
                                    <p className='font-bold'>Availability</p>
                                    <p>3 pieces</p>
                                </div>
                                <div id={`foodItem_${index}_list`} style={{display:"none"}}>
                                    {testFood.map((food, index) => (
                                        <div className='flex flex-row justify-between px-2'>
                                            <p className='font-bold'>{food[0]}</p>
                                            <p>{food[1]}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )})}
                    </div>
                    <div className='flex flex-row justify-center rounded-xl'>
                        <IoIosArrowDown className='h-5 text-black' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home