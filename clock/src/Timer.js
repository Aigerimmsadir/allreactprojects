import React, { Component } from 'react'
class Timer extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Time"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}></input>
           
            <button type="submit"> Add time  </button>
          </form>
        </div>
      </div>
    )
  }
}
export default Timer