import React from 'react'
import Card from './Card';

const CardArea = () => {

  const url = 'https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800';
    const name = "Pasta";
    const price = 100;
 
  // const url = 'https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800';
  // const paneer = "https://www.whiskaffair.com/wp-content/uploads/2021/10/Paneer-Lababdar-2-3.jpg"

  return (
    
    <>

     <ul className='grid grid-cols-4 gap-x-14 ml-6 gap-y-8'>

     <li>
    <div className='bg-gray-300 h-80 w-56 rounded-3xl shadow-xl'>
        <img
     className='rounded-t-3xl'
     src={url}/>
     <h1 className='text-2xl font-semibold tracking-wider'>Name : {name}</h1>
     <h1 className=' font-normal tracking-wider'>Price : ₹{price}</h1>
     <button className='bg-red-500 text-white h-8 w-2/3 rounded-md font-medium tracking-wider'>Delete Item</button>
     </div>
    </li>

    
    

     </ul>
        
      
    </>

  )
}

export default CardArea