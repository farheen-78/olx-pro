import firebase from '../../config/firebase';


const facebook_login=()=>{
   return(dispatch)=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      
      var token = result.credential.accessToken;
      var user = result.user;
    
      let create_user={
        name:user.displayName,
        email:user.email,
        profile:user.photoURL,
        uid:user.uid,
        uLogin:false

      }
      // console.log("create user",create_user)
    
        firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
        .then(()=>{
          dispatch({type:"setUser",payload:create_user})
        
        alert("User login succesfully");
        
                         
      })
        }).catch(function(error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error===",errorMessage);
      
      
    });
    





 }
}


const set_data=(data)=>{
  // console.log("Chal Raha ha");
  return (dispatch)=>{
    dispatch({type:"setdata",data:data})
 
  }
    

}
export  {
// get_data,
set_data,
facebook_login

}