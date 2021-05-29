import {useEffect,useState} from "react"
import './App.css';
//https://fortnite-api.com/v2/news
import axios from "axios"

function App() {

  const [weather,setWeather] =useState(null)
  const [input,setInput] =useState("")


  useEffect(()=>{
            axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_SECRET_NAME}&q=India`)
            .then(data =>{
              setWeather(data.data)
              console.log(data.data)}).catch(err=>console.log(err))
  },[])
 const searchCity = (e)=>{
 setInput(e.target.value)}

 const searchWeather = ()=>{
   axios.get(`http://api.weatherapi.com/v1/current.json?key=887e42a45e3e4ad9b07152747212905&q=${input}`).then(data =>{
    setWeather(data.data)
    console.log(data.data)}).catch(err=>console.log(err))

 }



  return (
    <div className="App">
    {weather && (     
      <div>
        <div className="search">
          <input onChange={searchCity} type="text" />
          <button onClick={searchWeather}>Search</button>

        </div>

      <div className="weather-info">
      <h1>{weather.location.country}</h1>
      <h2>{ weather.location.name} </h2>
      <div className="condition">
        <h3>{weather.current.condition.text} </h3>
        <img src={weather.current.condition.icon} alt="" />
        <h3>{weather.current.temp_c}°C </h3>
      </div>
      </div>
      </div>
      )}
    </div>
  );
}

export default App;
