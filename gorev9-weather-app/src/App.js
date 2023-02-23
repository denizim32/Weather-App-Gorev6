import axios from "axios";
import {useEffect, useState} from "react";
import './App.css';
import City from "./City.jsx";

function App(){ 
  const key="fcb4c88bd5dbae1f7dbc4f766ab49d23"
const [weatherapp, setWeatherapp]=useState();
const [city, setCity]=useState();
useEffect(()=>{
  async function getApi(){
    try {
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${weatherapp}&appid=${key}&units=metric`)
      console.log(response);
      setCity(response.data);
    }catch(error){
      console.error(error);
    }
  }
  getApi();
}, [weatherapp]);
console.log(weatherapp);  
return(
    <>
    <h1 className="h1">Hava Durumu Sorgulama</h1>
    <div className="img">
      <div className="App">
        <h1 className="first">Şehir seçerek durumunu öğrenebilirsiniz.</h1>
        <h2 className="second">Şehrini seç ve hava durumunu öğren.</h2>
        <button className="btn1" type="button" onClick={setWeatherapp}>+ Şehir ekle</button>
      </div>
    </div>
    <div className="img2">
      <h1>Sunday</h1>
    </div>
    
  {city && <City city={city} />}

  </>
  
);
}

export default App;
