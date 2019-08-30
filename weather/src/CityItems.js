import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CityItems extends Component {
    constructor() {
        super()
        this.state = {
          items: [
            'london,uk',
            'manchester,uk',
            'hamilton,us'
          ],
          
        }
      }

    goToCityWeather = (city) => {
        localStorage.setItem("selectedCity", city);
       // this.props.history.push('/card-details');
    // you can manage here to pass the clicked card id to the card details page if needed
    for (var i = 0; i < localStorage.length; i++)   {     
   var key = localStorage.key(i);
   console.log(localStorage.getItem(key));
}
    }



    createCities= item => {
        return (
          <li  onClick = {()=>this.goToCityWeather(item)}>
            <Link to={`/weather`}> {item}</Link>
           </li>
        )
      }
  render() {
    const cityEntries = this.state.items
    const listItems = cityEntries.map(this.createCities)
    return <ul className="theList">{listItems}</ul>
  }
}
export default CityItems