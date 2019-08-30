import React, { Component } from 'react'
class NewsItems extends Component {
    createNews = item => {
        return (
          <li className="list-group-item" >
              <div className="row">
              <div className="col-1">
              <div onClick={() => this.props.upVotes(item.key)}> <span class="glyphicon glyphicon-chevron-up"> </span></div>
              {item.votes}
              <div onClick={() => this.props.downVotes(item.key)}> <span class="glyphicon glyphicon-chevron-down"> </span> </div>
              </div>
              <div className="col-2">
                  <img height="100px" src={item.image} />
                  </div>
              <div className="col-9">
            <p><b>{item.title}</b></p>
            <p><b>{item.reddit}</b> <small className='greyText'> Posted by u/{item.author} {item.time}</small></p>
            <p> <span class="glyphicon glyphicon-share"></span> 	&nbsp;<span class="glyphicon glyphicon-comment"></span>	&nbsp;<small className='greyText'>	&nbsp;{item.comments}	&nbsp; comments</small></p>
            </div>
            </div>
           </li>
        )
      }
  render() {
    const newsEntries = this.props.entries
    const listItems = newsEntries.map(this.createNews)
    return <ul className="list-group">{listItems}</ul>
  }
}
export default NewsItems