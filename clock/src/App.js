import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js'
import Timer from './Timer.js'
import DatePicker from "react-datepicker";
let time = new Date().toLocaleString();

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
     // items: [],
      currentItem: {
        text: '',
       // key: '',
      },
      deadline:''
    }
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem.text;
    if (newItem.text !== '') {
      
      var tt = new Date(newItem)
      this.setState({
        currentItem: { text: '' },
        
        
      })
      this.state.deadline=tt;
    
      console.log("deadline is: "+this.state.deadline);
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText }
    this.setState({
      currentItem,
    })
  }
  red = React.createRef()
  render() {
    return (
      <div className="App"> 
<Timer 
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem} />
   
      <div className="App">
       {/* <p>{this.state.currentItem.text}</p> */}
       <Clock deadline={this.state.deadline}></Clock> 

      </div>
      </div>
    );
  }
}
export default App;
