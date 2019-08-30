import React, { Component } from 'react'
class NotesItems extends Component {
    createTasks = item => {
        return (
          <li onClick={() => this.props.deleteItem(item.key)}>
            {item.text} | {item.content}
           <button  key={item.key} onClick={() => this.props.deleteItem(item.key)}>delete</button></li>
        )
      }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)
    return <ul className="theList">{listItems}</ul>
  }
}
export default NotesItems