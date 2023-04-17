import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData]=useState({});
  const [location, setLocation]=useState('');
  const url=
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`
  const searchCity=(e)=>{
    if(e.key==='Enter'){
      axios.get(url)
      .then(res=>{
        setData(res.data)
        console.log(res.data)
      })
      setLocation('');
    }
  }
  return (
   <div className='wrapper'>
    <div className='container'>
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
      <div className="content-wrapper">
            <div className="city bold">
                <p>{data.name}</p>
            </div>
            <div className="temp">
                {data.main ? <h1>{((data.main.temp-32)/1.8).toFixed()}°C</h1> : null}
            </div>
            <div className="status">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
        </div>
        <div className="footer-wrapper">
           <div className="feel-like">
                {data.main ? <p  className='bold'>{((data.main.feels_like-32)/1.8).toFixed()}°C</p> : null}
                <p>Feels Like</p>
           </div>
           <div className="humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
           </div>
           <div className="winds">
                {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
                <p>Winds</p>
           </div>
        </div>
    </div>
   </div>
  );
}

export default App;
