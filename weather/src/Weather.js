import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

//import Titles from "./components/Titles";

//import Weather from "./components/Weather";

const API_KEY = "5bdd83647452477da476504440afab80";

class Weather extends React.Component {

 state={
     name:'',
     weather_main:'',
     weather_description:'',
     temp:'',
     visibility:''

 }


 
  getNews = async (e) => {
    e.preventDefault();
    let selectedCity = localStorage.getItem("selectedCity");
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=32daa01ccf4e4d173961eb37469130a0`);
    const data = await api_call.json();
  
    console.log(data);
    this.setState({
        name:data.name,
        weather_main:data.weather[0].main,
        weather_description:data.weather[0].description,
        temp:data.main.temp,
        visibility:data.visibility
    })
    
  }

  render() {
   
    return(
      <div>
        <button onClick={this.getNews}>Click to get weather</button>
      <h1>{this.state.name}</h1>
      <p>{this.state.weather_main}</p>
      <p>{this.state.weather_description}</p>
      <p>{this.state.temp}</p>
      <p>{this.state.visibility}</p>
     
 </div>
    )
  }
}
export default Weather;