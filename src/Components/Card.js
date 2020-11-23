import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


class Card extends React.Component{
render(){
 console.log("Key",this.props.key)
   
return(
  
    
<div className="container1">
  
  <Link to={"/ProductDetails/" + this.props.id}>
  <div className="row">
     <div className="col-sm-3 col=md-4 ">


 <div className="card my-2 mx-3"  >
   <p className="heart"><FavoriteBorderIcon/></p>
    <img src={this.props.pic} className="card-img-top cImage" alt="..." />
    <div className="card-body text-center">
      <h3 className="card-title  ">{this.props.title}</h3>
      <p className="card-text  ">{this.props.text}</p>
 
      <p className="card-text ">Rs:{this.props.price}</p>
      
    </div>

</div> 
</div> 
 </div>
 
 </Link>
 </div>

 )}


 }



export default Card;
