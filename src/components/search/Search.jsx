import './Search.css';
import { useState } from 'react';
import axios from 'axios';
const Search=(e)=>{
  const [location, setLocation]=useState('');
  const [data, setData]=useState({});
  const openWeatherUrl = 
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a286214b0d9f9898fee2db53200860cf`
  
  const searchCity=(e)=>{
   if(e.key==="Enter"){
    axios.get(openWeatherUrl)
    .then(res=>{
      setData(res.data);
      console.log(res.data);
    })
    setLocation('');
   }
  }
    return (
       <div className="search-wrapper">
        <div className="search-bar">
            <input
                value={location}
                onChange={e=>setLocation(e.target.value)}
                onKeyPress={searchCity}
                type="text" 
                placeholder='Enter the city'/>
        </div>
       </div>
    );
}

export default Search;