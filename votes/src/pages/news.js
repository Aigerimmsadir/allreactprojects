import React, { Component } from "react";
import {
  withStyles,
 
 
} from "@material-ui/core";



import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
});

class News extends Component {
  state = {};

  generate = () => {
    return this.props.items.map(item => (
    <li className="list-group-item" >
    <div className="row">
    <div className="col-1">
    <div onClick={() => this.upVotes(item.key)}> <span class="glyphicon glyphicon-chevron-up"> </span></div>
    {item.votes}
    <div onClick={() => this.downVotes(item.key)}> <span class="glyphicon glyphicon-chevron-down"> </span> </div>
    </div>
    <div className="col-2">
        <img height="100px" src={item.image} />
        </div>
        <div className="col-1">
       
        </div>
    <div className="col-8">
  <p><b>{item.title}</b></p>
  <p><b>{item.reddit}</b> <small className='greyText'> Posted by u/{item.author} {item.time}</small></p>
  <p> <span class="glyphicon glyphicon-share"></span> 	&nbsp;<span class="glyphicon glyphicon-comment"></span>	&nbsp;<small className='greyText'>	&nbsp;{item.comments}	&nbsp; comments</small></p>
  </div>
  </div>
 </li>
    ));
  };
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
    for (var i=0;i<this.props.items.length;i++){
      if(this.props.items[i].key===key){
        filteredItemss[i]=this.props.items[i];
         
        filteredItemss[i].votes=this.props.items[i].votes+1;
     
      }
      else{
        filteredItemss[i]=this.props.items[i];
      }
      
    }

   filteredItemss.sort(this.compare);
    this.setState({
      items: filteredItemss,
    })
    this.props.items.sort(this.compare);
  }
  downVotes = key => {
   
    const filteredItemss =[]
    for (var i=0;i<this.props.items.length;i++){
      if(this.props.items[i].key===key){
        filteredItemss[i]=this.props.items[i];
         
        filteredItemss[i].votes=this.props.items[i].votes-1;
     
      }
      else{
        filteredItemss[i]=this.props.items[i];
      }
      
    }

   filteredItemss.sort(this.compare);
    this.setState({
      items: filteredItemss,
    })

  }
 
  render() {
    const { classes } = this.props;

    return (
      <div>
        
        <div className= "mycontainer">
         
            <ul className="list-group">
             {this.generate()}
            </ul>
         
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});



export default connect(
  mapStateToProps,
  
)(withStyles(styles)(News));