
import { useEffect, useState} from 'react'
import axios from 'axios';
import './App.css'



function App() {

  const [ name , setName ] = useState('');
  const [ price , setPrice ] = useState(0);
  const [ url , setUrl ] = useState('');
  const [ listOfItems , setlistOfItems ] = useState([]);


const addDish = () => {
   if(name == "" && price == "" && url == "" ){

    return alert("Enter the values first")

   } else{
    axios.post("https://menu-card-c261.onrender.com/createItem", {
      name,
      price,
      url,
  }).catch((error) => { throw error}).then(() => {
    alert("Dish Added !!");
    axios.get("https://menu-card-c261.onrender.com/getItems").then((response) => {
    setlistOfItems(response.data);
  });
  });
   }
    
  };


      useEffect(() => {
         
        axios.get("https://menu-card-c261.onrender.com/getItems").then((response) => {
        
         
        setlistOfItems(response.data)
      
    })
      } , [])

      const deleteItem = (id) => {
        
        axios.delete(`https://menu-card-c261.onrender.com/deleteItems/${id}`).then(() =>{
          return axios.get("https://menu-card-c261.onrender.com/getItems")
        }).then((response) => {
        
         
            setlistOfItems(response.data)
          
        }).then(alert("Dish Removed"))  
    };
      
  return (
    <>
    <div>
       <p className='bg-black h-16 text-2xl sm:text-3xl pt-3 font-extrabold tracking-wider -mt-7 text-white'>Menu Card Items</p>
    </div>
    <div >
      <div className='grid sm:grid-rows-3 lg:grid-rows-none lg:grid-cols-3 justify-items-center -ml-2 mt-2'>
      <input className='inputItem bg-gray-200 w-80 h-10 pl-4 mt-4 lg:mt-0' type="text" onChange={(e) => {  
        setName(e.target.value)
        if(name.length >= 8){
         alert("Letter must be less then 8")
        }
        }} placeholder='Dish'/>
      <input className='inputItem bg-gray-200 w-80 h-10 pl-4 mt-4 lg:mt-0' type="text" onChange={(e) => {  
        setPrice(e.target.value)
        }} placeholder='Price'/>
      <input className='inputItem bg-gray-200 w-80 h-10 pl-4 mt-4 lg:mt-0' type="text" onChange={(e) => {  
        setUrl(e.target.value)
        }} placeholder='imageUrl'/>
     
      </div>
      <button onClick={addDish} className='bg-green-400 mt-2 -ml-2 h-8 rounded-lg w-80 lg:w-96 lg:h-10 shadow-2xl font-medium text-white hover:bg-green-500 focus:transition-colors duration-300 active:bg-green-600'>Add Item</button>
      
    </div>
    
      <div className='mt-8 justify-items-center'> 
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-14 ml-6 gap-y-8'>
      {listOfItems.map((value) => (
            <li key={value.name}>
              <div className='bg-gray-300 h-80 w-56 rounded-3xl shadow-xl'>
                <div className='h-56'><img className='h-full w-full rounded-t-3xl object-fill' src={value.url} alt={value.name} /></div>
                <h1 className='text-2xl font-semibold tracking-wider'>Name : {value.name}</h1>
                <h1 className='font-normal tracking-wider'>Price : ₹{value.price}</h1>
                <button onClick={ () =>{deleteItem(value._id)} } className='bg-red-500 text-white h-8 w-2/3 rounded-md font-medium tracking-wider hover:bg-red-700 focus:transition-colors duration-200 active:scale-95'>
                  Delete Item
                </button>
              </div>
            </li>
          ))}
         </ul>
      </div>
   
    </>
  )
}

export default App
