
import _ from "lodash";

const defaultState = {
    items:[
        {votes:0,title:"What food user to be good?",comments:11,reddit:'r/askReddit',author:'Lena',time:'17 hours ago', image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",key:1},
        {votes:0,title:"Traffic cones",comments:5,reddit:'r/iAMA',author:'Catherine',time:'5 minutes ago', image:"https://www.washingtonpost.com/resizer/9Rv4lo5SihBZaw9c3iS_ttslL0k=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/777BDPB4MYI6TIDMH3EO2UE5CU.jpg",key:2},
        {votes:0,title:"World's leading roads",comments:432,reddit:'r/gifts',author:'Harry',time:'14 days ago', image:"https://images.pexels.com/photos/56832/road-asphalt-space-sky-56832.jpeg?cs=srgb&dl=asphalt-clouds-fields-56832.jpg&fm=jpg",key:3},
        {votes:0,title:"World's leading roads3333",comments:432,reddit:'r/gifts',author:'Harry',time:'14 days ago', image:"https://images.pexels.com/photos/56832/road-asphalt-space-sky-56832.jpeg?cs=srgb&dl=asphalt-clouds-fields-56832.jpg&fm=jpg",key:4},

      ]
};

const todoReducer = (state = defaultState) => {

return state;
};

export default todoReducer;  