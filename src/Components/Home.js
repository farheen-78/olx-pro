import React from 'react';
// import '../App.css';
import Img from '../images/olx_pic.jpg';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Card from '../Components/Card';
import firebase from '../config/firebase';
import {Footer,Copyright} from '../Components/Footer';




class Home extends React.Component{
  
 state={
      arr:[]
  }

componentDidMount(){
  let a=[];
  firebase.database().ref('AdsData').on('child_added',(data)=>{
   
    a.push(data.val());
    console.log("Array:",a)
    this.setState({
      arr:a
  })
  })
  
  
}
 
      
  
      

render(){
  
  return(
    
    <div>
<Header/>
<Menu/>
<img src={Img} className="img-fluid big" alt="Responsive image" />
<br/>
<div className="container mt-4">
<h3>Fresh recommendations</h3>
  <div className="row">
  
 
  
         
  {
  
        this.state.arr.map((ad,ind) => <Card id={ad.key} pic={ad.pic}  price={ad.price} title={ad.title} text={ad.description}  />)

    
  }


</div> 


</div>
<Footer/>
<Copyright/>
</div>

  )
}

}


export default Home;