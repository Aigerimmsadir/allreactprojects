import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

class NewsItems extends Component {
    state={
        // title:'',
        // author:'',
        // urlToImage:'',
        // description:'',
        // content:''
        item:''
    }
    handleInput = async(e) => {
        const itemText = e.target.value;
        console.log(itemText);
        const api_call = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-17&sortBy=publishedAt&apiKey=5bdd83647452477da476504440afab80`);
        const data = await api_call.json();
         var items = data.articles;
        var myitem = items.find(g=>g.title===itemText);
        console.log(myitem);
        this.setState({
          item:itemText
        })
      }
      handleClick=async(e) =>{
        e.preventDefault();
          
          const itemText = e.currentTarget.value;
        //console.log(itemText);
        const api_call = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-17&sortBy=publishedAt&apiKey=5bdd83647452477da476504440afab80`);
        const data = await api_call.json();
         var items = data.articles;
        var myitem = items.find(g=>g.title===itemText);
        //console.log(myitem);
        this.setState({
          item:myitem
        })
        console.log(this.state.item)
      }
    // showDetail=async(item)=>{
    //     const api_call = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-17&sortBy=publishedAt&apiKey=5bdd83647452477da476504440afab80`);
    //     const data = await api_call.json();
    //      var items = data.articles;
    //     var myitem = items.find(g=>g===item);
    //     console.log(myitem);
    // }
    createTasks = item => {
        return (
          <li className="list-group-item" >
          
            <button value={item.title} onClick={this.handleClick}>{item.title}</button>
            <img height="100px" src={item.urlToImage} />
            {item.title===this.state.item.title?
            <p>{this.state.item.content}</p>: <p></p>
            }
           </li>
        )
      }
  render() {

    const newsEntries = this.props.entries
    const listItems = newsEntries.map(this.createTasks)
    return <ul className="list-group">{listItems}</ul>
  }
}
export default NewsItems