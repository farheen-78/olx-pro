import React from 'react';

 


class Menu extends React.Component{
    render(){

return(
 
     
 <ul className="list-inline con">
    
<li className="list-inline-item">
      <div className="dropdown">
      <a className="btn  dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All Categories
        </a>
        
        <div className="dropdown-menu mega-menu" aria-labelledby="dropdownMenuButton">
          <div className="row">
            <div className="col-md-3">
              <a className="dropdown-item head" href="#">Vehicles</a>
              <a className="dropdown-item" href="#">Tractors </a>
              <a className="dropdown-item" href="#">Cars</a>
              <a className="dropdown-item" href="#">Spare parts</a>
              <a className="dropdown-item head" href="#">Mobiles</a>
              <a className="dropdown-item" href="#">Mobile Phones </a>
              <a className="dropdown-item" href="#">Accessories</a>
            </div>
            <div className="col-md-3">
            <a className="dropdown-item head" href="#">Animals</a>
              <a className="dropdown-item" href="#">Cats </a>
              <a className="dropdown-item" href="#">Dogs</a>
              <a className="dropdown-item" href="#">Horses</a>
              <a className="dropdown-item head" href="#">Bikes</a>
              <a className="dropdown-item" href="#">Scooters </a>
              <a className="dropdown-item" href="#">Motorcycles</a>

            </div>
            <div className="col-md-3">
            <a className="dropdown-item head" href="#">Fashion n Beauty</a>
              <a className="dropdown-item" href="#">Lawn n Pret </a>
              <a className="dropdown-item" href="#">Wedding</a>
              <a className="dropdown-item" href="#">Watches</a>
              <a className="dropdown-item head" href="#">Jobs</a>
              <a className="dropdown-item" href="#">It n Networking </a>
              <a className="dropdown-item" href="#">Sales</a>

            </div>
            <div className="col-md-3">
            <a className="dropdown-item head" href="#">Services</a>
              <a className="dropdown-item" href="#">Home n Office Repair </a>
              <a className="dropdown-item" href="#">Event Services</a>
              <a className="dropdown-item" href="#">Web Development</a>
              <a className="dropdown-item head" href="#">Kids</a>
              <a className="dropdown-item" href="#">Kids Bikes </a>
              <a className="dropdown-item" href="#">Toys</a>

              
            </div>
            
          </div>

    
        </div>
      </div>
      </li>
    
   
    
  <li className="list-inline-item ml-2">Mobile Phones</li>
  <li className="list-inline-item">Cars</li>
  <li className="list-inline-item">Motorcycles</li>
  <li className="list-inline-item">Houses</li>
  <li className="list-inline-item">TV-Audio-Video</li>
  <li className="list-inline-item">Tablets</li>
  <li className="list-inline-item">Land and Plots</li>
</ul>

)
}}



export default Menu;



