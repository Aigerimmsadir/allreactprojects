import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

//import Titles from "./components/Titles";
import NewsItems from "./components/NewsItems";
//import Weather from "./components/Weather";

const API_KEY = "5bdd83647452477da476504440afab80";

class App extends React.Component {
  state = {
items:[]
  }
  getNews = async (e) => {
    e.preventDefault();
    
    const api_call = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-17&sortBy=publishedAt&apiKey=5bdd83647452477da476504440afab80`);
    const data = await api_call.json();
    this.setState({
      items:data.articles
    })
    console.log(data)
  }

  render() {
   
    return(
      <div>
        <button onClick={this.getNews} className="bnt btn-success">Get news!</button>   
         <NewsItems entries={this.state.items} />
 </div>
    )
  }
}
export default App;