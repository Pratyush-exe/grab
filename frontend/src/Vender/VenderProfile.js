import React from 'react'

function VenderProfile() {
    
    // will be received from backend
    let user = {
        "position": {"lat": 76, "lat": 26},
        "city": "somecity",
        "state": "somestate",
        "country": "somecountry",
        "img": "https://www.westcentralfoodservice.com/wp-content/uploads/2019/04/5-food-trends-2019-no-title.jpg",
        "color": "#e32636",
        "food": [["foodA", "2 pieces"], ["foodB", "3 pieces"], ["foodB", "4 pieces"],
        ["foodA", "2 pieces"], ["foodB", "3 pieces"], ["foodB", "4 pieces"],
        ["foodA", "2 pieces"], ["foodB", "3 pieces"], ["foodB", "4 pieces"],
        ["foodA", "2 pieces"], ["foodB", "3 pieces"], ["foodB", "4 pieces"]]
    }

    return (
        <div className='h-screen w-screen flex flex-row justify-center items-center'>
            <div className='h-5/6 w-1/2 rounded-3xl' 
                style={{backgroundColor: `${user["color"]}`}}>
                <div className='relative h-1/4 border-b-2 border-black border-opacity-10'>
                    <div id="profileContainer relative">
                        {/* <img src={user["img"]} className="absolute h-3/4 w-auto "></img> */}
                    </div>
                    <div id="randomImageContainer"></div>
                </div>
                <div className='relative h-3/4'>

                </div>
            </div>
        </div>
    )
}

export default VenderProfile