import React from "react";

import NewsItems from "./NewsItems";

import News from "./pages/news";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);


class App extends React.Component {
  state = {
items:[
  {votes:0,title:"What food user to be good?",comments:11,reddit:'r/askReddit',author:'Lena',time:'17 hours ago', image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",key:1},
  {votes:0,title:"Traffic cones",comments:5,reddit:'r/iAMA',author:'Catherine',time:'5 minutes ago', image:"https://www.washingtonpost.com/resizer/9Rv4lo5SihBZaw9c3iS_ttslL0k=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/777BDPB4MYI6TIDMH3EO2UE5CU.jpg",key:2},
  {votes:0,title:"World's leading roads",comments:432,reddit:'r/gifts',author:'Harry',time:'14 days ago', image:"https://images.pexels.com/photos/56832/road-asphalt-space-sky-56832.jpeg?cs=srgb&dl=asphalt-clouds-fields-56832.jpg&fm=jpg",key:3},

]

  }
  compare=( a, b ) =>{
    if ( a.votes > b.votes ){
      return -1;
    }
    if ( a.votes < b.votes ){
      return 1;
    }
    return 0;
  }
  upVotes = key => {
   
    const filteredItemss =[]
    for (var i=0;i<this.state.items.length;i++){
      if(this.state.items[i].key===key){
        filteredItemss[i]=this.state.items[i];
         
        filteredItemss[i].votes=this.state.items[i].votes+1;
     
      }
      else{
        filteredItemss[i]=this.state.items[i];
      }
      
    }

   filteredItemss.sort(this.compare);
    this.setState({
      items: filteredItemss,
    })
    console.log(this.state.items)
  }
  downVotes = key => {
   
    const filteredItemss =[]
    for (var i=0;i<this.state.items.length;i++){
      if(this.state.items[i].key===key){
        filteredItemss[i]=this.state.items[i];
         
        filteredItemss[i].votes=this.state.items[i].votes-1;
     
      }
      else{
        filteredItemss[i]=this.state.items[i];
      }
      
    }

   filteredItemss.sort(this.compare);
    this.setState({
      items: filteredItemss,
    })
    console.log(this.state.items)
  }
  render() {
   
    return(
//       <div className="mycontainer">
//         <NewsItems entries = {this.state.items} upVotes={this.upVotes}  downVotes={this.downVotes}/>
//  </div>
<ReduxProvider store={reduxStore}>
        <div className="App">
          
          <News />
        </div>
      </ReduxProvider>
    )
  }
}
export default App;