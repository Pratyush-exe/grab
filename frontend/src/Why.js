import React from 'react'

function Why() {
  return (
    <div className='flex flex-col items-center mx-auto' style={{"maxWidth": "50%"}}>
        <img src="https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/blog/wp-content/uploads/2019/01/Waste-food_bg.jpg"
            className='rounded-3xl border-4 border-black h-96 w-fit m-3 mb-20'></img>
        <p className='text-justify'>
        There are billions worth of edible food being thrown away every year, mostly in developed countries. The production levels are greater than the consumption, meaning food has to be thrown away, yet people are dying of hunger in developing nations.
        We aim to solve this by providing a medium to connect.
        Food waste can quickly become any restaurant’s forgotten cost.
        </p>
        <br/>
        <p className='text-justify'>
        The majority of food wastage in restaurants happens when the raw materials 
        are not stored properly, which leads to their decay.  
        Thus, it becomes imperative to prevent cross-contamination of fresh food.
        </p>
        <br/>
        <p className='text-justify'>
        Some factor includes are Over-ordering of food items, Spoilage,
        Overproduction where the chef often cooks too much food to avoid 
        storage for a small proportion of food. 
        </p>
        <br/>
        <p className='text-justify'>
        GRRRAB helps to overcome the problem and assists in the food waste management of the restaurant.
        So this avoids the disposal of leftover food in the restaurant
        When an individual opens this website they can able to check
        the availability of remaining food from a nearby restaurant.
        And based on that they can visit that particular restaurant and can get the food at a low cost 
        or next to the negligible price.
        And the restaurant owners or vendors can update the list of available foods daily. 
        We provide a secretKey to new vendors that signUp, this key is used to log in to their profiles. 
        Here they can update the food list.
        The data and authentication are managed using MongoDB
        </p>
        <br/>
        <p className=''>Related Blogs</p>
        <br/>
        <a className='underline text-blue-700' href='https://leadthechange.bard.edu/blog/how-does-food-waste-affect-the-environment'>
            1. How does food wastage affect the environment
        </a>
        <br/>
        <a className='underline text-blue-700' href='https://moveforhunger.org/the-environmental-impact-of-food-waste'>
            2. Environment impact of food wastage
        </a>
        <br/>
        <a className='underline text-blue-700' href='https://www.ers.usda.gov/topics/food-nutrition-assistance/food-security-in-the-u-s/key-statistics-graphics/#:~:text=The%20prevalence%20of%20food%20insecurity%20was%20unchanged%20from%202019%20to,to%2010.5%20percent%20in%202019.'>
            3. Food insecurity Stats
        </a>
    </div>
  )
}

export default Why