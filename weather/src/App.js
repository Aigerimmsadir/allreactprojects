import React ,{ Component } from 'react';

import './App.css';
import CityItems from './CityItems'
import Weather from './Weather'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  

 
  
  render() {
    return (

      // <div className="App">
        
      //  <CityItems entries={this.state.items}/>
      //        </div>
      <Router>
  <Route exact path='/' component={CityItems}/>
  {/* Оба /roster и /roster/:number начинаются с /roster */}
  <Route path='/weather' component={Weather}/>

</Router>

    )
  }
}
export default App