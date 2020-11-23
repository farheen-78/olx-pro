import React from 'react';
import firebase from '../config/firebase'



class Attribute extends React.Component{
    
    constructor(){
        super()
        this.state={
            category:"",
            title:"",
            description:"",
            sellerName:"",
            pic:null,
            price:0,
        }
    }
    handleChangeCategory=(e)=>{
      this.setState({
      category:e.target.value,
      
      
      
      })
  }
    handleChangeTitle=(e)=>{
        this.setState({
        title:e.target.value
        
        
        
        })
    }
    handleChangeDescription=(e)=>{
      this.setState({
      description:e.target.value
      
      
      
      })
  }
  handleChangeSellername=(e)=>{
    this.setState({
    sellerName:e.target.value
    
    
    
    })
}
upload_file=()=>{
  console.log("file",this.state.file);
   var ref = firebase.storage().ref().child(`images/${this.state.file.name}`).put(this.state.file)
ref.on('state_changed', function(snapshot){
 
}, (error)=> {
 
}, ()=> {
  ref.snapshot.ref.getDownloadURL().then((url)=> {
     console.log('url',url);
    this.setState({
      pic:url
      
      
      
      })

  });
});

}
handleChangePrice=(e)=>{
  this.setState({
  price:e.target.value
  
  
  
  })
}


    sendData=()=>{
        
        let key=firebase.database().ref('AdsData').push().key;
        let AdsData={
            id:key,
            category:this.state.category,
            title:this.state.title,
            description:this.state.description,
            sellerName:this.state.sellerName,
            price:this.state.price,
            pic:this.state.pic
        }
        
      
    //  firebase.database().ref('AdsData').child(key).set(AdsData);
    firebase.database().ref(`AdsData/${key}`).set(AdsData);
    // firebase.database().ref('AdsData').child(key).set(AdsData);
    //  .then(function()=>{
        alert("Your Ads Successfully publish");
    //  })
    
    }
        
    
render(){

    
    

    // console.log("AdsData",AdsData)
return(
    <div>
    <nav className="navbar navbar-light bg-light fixed-top">
      <a className="navbar-brand  " href="#">olx</a>
    </nav>
        
    
    <div className="row ">
      <div className="col-md-12">
      <h1>POST YOUR AD</h1>
      </div>
      <div className="main border">  
        <div>Selected Category
          <ul>
            <li>Mobile</li>
            <span>/</span>
            <span>Tablets</span>
          </ul>
        </div> 
        <p>Ad Category*</p>
        <input type="text" name="category" onChange={(e)=>this.handleChangeCategory(e)} style={{fontSize: '18pt', height: '40px', width: '280px'}} />
        <p>Ad title*</p>
        <input type="text" name="title" onChange={(e)=>this.handleChangeTitle(e)} style={{fontSize: '18pt', height: '40px', width: '280px'}} />
        <p>  Description*</p>
        <textarea name="description" onChange={(e)=>this.handleChangeDescription(e)} style={{fontSize: '18pt', height: '120px', width: '380px'}}  defaultValue={" "} />
        <p>Price*</p>
        <input type="text" name="price" onChange={(e)=>this.handleChangePrice(e)} style={{fontSize: '18pt', height: '50px', width: '280px'}} />
        <br />
        <input type="file" onChange={(e)=>this.setState({file:e.target.files[0]})}/>
        <button onClick={this.upload_file}>UpLoad File</button>
        <p>Seller Name*</p>
        <input type="text" name="sellerName"onChange={(e)=>this.handleChangeSellername(e)}  style={{fontSize: '18pt', height: '50px', width: '280px'}} />
        
        <br />

        <button onClick={this.sendData}>Post your Ad</button>
      </div>
    </div>
  </div>



)}
}


export default Attribute;