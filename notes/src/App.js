import React, { Component } from 'react'
import './App.css'
import NotesList from './noteslist'
import NotesItems from './notesitems'
class App extends Component {
  
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        content:''
      },
    }
  }
  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  handleInput_content = e => {
    const itemText = e.target.value
    const currentItem = { text:this.state.currentItem.text,content: itemText,key:this.state.currentItem.key}
    this.setState({
      currentItem,
    })
    
  }
  addItem = e => {
    //console.log(this.state.currentItem.text,this.state.currentItem.content);
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '', content:'' },
      })
      //this.state.currentItem.content="";
      console.log(this.state.currentItem.text,this.state.currentItem.key,this.state.currentItem.content)
    }
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }
  red = React.createRef()
  
  render() {
    return (
      <div className="App">
<NotesList
          addItem={this.addItem}
          inputElement={this.inputElement}
       

          handleInput={this.handleInput}
          handleInput_content={this.handleInput_content}
          currentItem={this.state.currentItem}
        /> 
       <NotesItems entries={this.state.items} deleteItem={this.deleteItem}/>
             </div>
    )
  }
}
export default App