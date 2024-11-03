import { useState } from "react"
import axios from "axios"

function Weather()
{
    const [city,setcity] = useState("")
    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [description,setdescription] = useState("")
    const [name,setname] = useState("")
    
    function handlecity(event)
    {
        setcity(event.target.value)
    }
     function getweather()
     {
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3bcb3146336cdbd3775c52af568cb48`) 
        weatherdata.then(function(success){
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdescription(success.data.weather[0].description)
            setname(success.data.name)
        })
    }
    return(
     <div className="bg-gradient-to-l from-red-400 to-purple-500  min-h-screen p-20 flex flex-col items-center justify-center">
      <div className="bg-gradient-to-b from-yellow-500 to-green-500 shadow-2xl p-10 rounded-md backdrop:blur-md max-w-lg w-fit text-center">

        <h1 className="text-2xl font-medium">Weather Report</h1>
        <p>I can give you a weather report about your city!</p>
        <input onChange={handlecity} type="text" placeholder="Enter your City Name" className="mt-4 border border-black rounded-md p-2"/><br />
        <button className="bg-black text-white p-3 rounded-md mt-4" onClick={getweather} >Get report</button>
   </div>

      <div className="mt-6 p-5 bg-gradient-to-tr from-orange-500 via-amber-400 to-red-500 rounded-md shadow-2xl">
            <h1 className="text-2xl font-bold text-center mb-4">{name}</h1>
            <p><b>Weather: {weather}</b></p>
            <p><b>Temperature: {temp}'C</b></p>
            <p><b>Description: {description}</b></p>
        </div>
      </div>
    )
}

export default Weather