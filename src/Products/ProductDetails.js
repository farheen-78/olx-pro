
import React from 'react';
import firebase from '../config/firebase';



class ProductDetails extends React.Component{
  
    state = {
      arry:[],
     key: this.props.match.params.id,
        // productId: this.props.match.params.pid,
        // obj: AdsData.filter(ads => ads.id === parseInt(this.props.match.params.pid))[0],
        obj:this.state.arry.filter(ads => ads.id === parseInt(this.props.match.params.id))[0],
    }

    componentDidMount(){
      let a=[];
      firebase.database().ref('AdsData').on('child_added',(data)=>{
       
        a.push(data.val());
        this.setState({
           arry:a
       })
      })
      
    }
render(){
  
  console.log("Array",this.state.arry)

return(

     <div>
          {/* <Header/> */}

          <div className="container-fluid">
  <div className="row">
    <div className="col-md-8  ">
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwSq4UseyC_QBUTR2cY55NIUzI6zso8xHf5A&usqp=CAU" alt />           */}
      {/* <img src={image_path} /> */}
      <img src={this.state.obj?.pic} />
      <div className="des mt-2 border ">
           Description<br></br>
        {this.state.obj?.description}
      </div>
    </div>
    <div className="col-md-4">
      <div className="row  border ml-1 price">{this.state.obj?.price}<br />
        
        {this.state.obj?.title}
      </div>
      <div className="mt-2 border sell">{this.state.obj?.sellerName}</div>  
      <div className="mt-2 border post">Posted in</div>  
    </div>
  </div>
  </div>
     </div>
)












}





}
export default ProductDetails;
// import React from 'react';
// // import Header from '../Components/Header';
// import Card from '../Components/Card';
// class ProductDetails extends React.Component{
     
// render(){
  
// return(

//      <div>
//           {/* <Header/> */}

//           <div className="container-fluid">
//   <div className="row">
//     <div className="col-md-8  ">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwSq4UseyC_QBUTR2cY55NIUzI6zso8xHf5A&usqp=CAU" alt />          
//       <div className="des mt-2 border ">
//            Description
//         {/* {this.props.text} */}
//       </div>
//     </div>
//     <div className="col-md-4">
//       <div className="row  border ml-1 price">Rs 360,000 - 7 Years<br />
//         Honda City 2014 on Installment
//         Mirpur, Azad Kashmir, Pakistan
//       </div>
//       <div className="mt-2 border sell">Seller Description{this.props.title}</div>  
//       <div className="mt-2 border post">Posted in</div>  
//     </div>
//   </div></div>
//      </div>
// )












// }





// }
// export default ProductDetails;