import React, { Component } from 'react'
class NewsDetails extends Component {
    
  render() {
    return (
        <div className="container">
            <h1>{this.props.item.title}</h1>
            <img src={this.props.item.urlToImage} />
            <h2>{this.props.item.author}</h2>
            
            <h3>{this.props.item.description}</h3>
            <p>{this.props.item.content}</p>
        </div>
    )
  }
}
export default NewsDetails