import React, { Component } from 'react'
class NotesList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
    
  }
  
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form  onSubmit={this.props.addItem}>
          <div className="form-group">
            <input
              name="text"
              placeholder="note name"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}></input>
              </div>
              <div className="form-group">

               <input
               name="content"
              placeholder="note content"
              ref={this.props.inputElement}
              value={this.props.currentItem.content}
              onChange={this.props.handleInput_content}></input>
              </div>
            <div/>
            <button className="btn btn-success" type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}
export default NotesList 