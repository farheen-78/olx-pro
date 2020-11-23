import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import App from '../App';
import Home from '..//Components/Home';
import Post from '../Components/Post';
import Attribute from '../Components/Attribute';
import ProductDetails from '../Products/ProductDetails';

class AppRouter extends React.Component{
render(){
    return(
<Router>
    <Route exact path='/' component={Home}/>
    {/* <Route exact path='/ProductDetails' component={ProductDetails}/> */}
    <Route exact path='/ProductDetails/:id' component={ProductDetails}/>
    <Route exact path='/Post' component={Post}/>
    <Route exact path='/Post/Attribute' component={Attribute}/>

    
</Router>
)
}  
}
export default AppRouter;