import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {facebook_login} from '../store/action';


class Header extends React.Component{
    render(){
      console.log("Users===",this.props.current_user)
let user=this.props.current_user;
return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="/"  >olx</a>
        
        <div className="form-group mt-3">
        
        <select className="form-control  " id="exampleFormControlSelect1">
          <option> Lahore</option>
          <option>Karachi</option>
          <option>Islamabad</option>
          <option>Quetta</option>
          <option>Hyderabad</option>
        </select>
      </div>
        <form className="form-inline  mt-1 my-lg-0">
        
            <input className="form-control  ml-3" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn s-btn btn-outline-light  my-2 my-sm-0" type="submit">
              <SearchIcon/></button>
          </form>
          {/* *********************************** */}
         
 
           {/* <a className="nav-link ml-3" onClick={this.props.facebook_login()} href="/">Login <span className="sr-only">(current)</span></a>  */}
             {/* <button className="nav-link ml-3" onClick={()=>this.props.facebook_login()} >Login </button>  */}
             
           {user.name?<img  src={user.profile} className="loginImg"/>:
          
           <button className="nav-link ml-3" onClick={()=>this.props.facebook_login()} >Login </button> 
           
}
           
                  <Link to="/Post"><button className="sell-btn"> SELL</button></Link>

      </nav>


)


    }
}
const mapStateToProps=(state)=>({
  current_user:state.current_user

  
  })
 
  const mapDispatchToProp=(dispatch)=>({
    facebook_login:()=>dispatch(facebook_login())
      
      })

// const mapDispatchToProp=()=>({
// facebook_login:()=>dispatch(facebook_login())
// })

export default connect(mapStateToProps,mapDispatchToProp)(Header);




 


