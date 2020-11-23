import React from 'react';
import {Link} from 'react-router-dom';
import { NavItem, DropdownButton, Dropdown } from 'react-bootstrap';
// import {LinkContainer} from 'react-router-bootstrap';

class Post extends React.Component{

  render(){
    
    const ClickFunction = (evt) => {
      alert (evt.target);
    }

    const MenuAndItems = [
      {
        main: "Mobile",
        sub: [
          "Tablets",
          "Accessories",
          "Mobile Phones"
        ],
      },
      {
        main: "Vehicles",
        sub: [
          "Cars",
          "Spare Parts",
          "Boats",
          "Cars Accessories"
        ],
      },
      {
        main: "Properpy for Sale",
        sub: [
          "Land & Plots",
          "Houses",
          "Portion & Floors"
        ],
      },
      {
        main: "Properpy for Rent",
        sub: [
          "Houses",
          "Rooms",
          "Apartment & Flats"
        ],
      },
      {
        main: "Bikes",
        sub: [
          "Motorcycle",
          "Spare Parts",
          "Scooters"
        ],
      },
      {
        main: "Services",
        sub: [
          "Education & Classes",
          "Car Rentals",
          "Event Services",
          "Health & Beauty"
        ],
      },
      {
        main: "Jobs",
        sub: [
          "Online",
          "Marketing",
          "IT & Networking"
        ],
      },
      {
        main: "Animals",
        sub: [
          "Cats",
          "Horses",
          "Birds"
        ],
      },
      {
        main: "Furniture & Home Decor",
        sub: [
          "Home Decoration",
          "Garden & Outdoor",
          "Office Furniture"
        ],
      },
      {
        main: "Fashion & Beauty",
        sub: [
          "Cloths",
          "Footware",
          "Wedding"
        ],
      },
      {
        main: "Kids",
        sub: [
          "Cloths",
          "Footware",
          "Wedding"
        ],
      },
    ];




    
return(
  
<div>
    <nav className="navbar navbar-light bg-light fixed-top">
    <a className="navbar-brand " href="#">olx</a>
  </nav>
  {/* <Link to="/Post/Attribute"><button> Cars</button></Link>   */}
 
   <div className="row">
    <div className="col-md-12">
    
      <h1>POST YOUR AD</h1>
      
   
    </div>
</div>



            
    
    <div className="main border">
      <div className="row">
        <div className="col-md-3 mx-2">
          CHOOSE A CATEGORY
        </div>
        <div className="col-md-6">
        </div>
        <div className="col-md-6 bor border ">

        <div>
    {MenuAndItems.map((item, ind) => (
      <DropdownButton
        key="right"
        id={`dropdown-button-drop-right-${ind}`}
        drop="right"
        variant="outline"
        title={item.main}
        className="row p-0 border-bottom post-menu"
      >
        {
          item.sub.map ((sub, subIndex) => (
            
          <Dropdown.Item as="div" eventKey={subIndex+1} className="border-bottom py-1 px-2" >
            <Link to="/Post/Attribute" className="sub-menu">{sub}</Link>
          </Dropdown.Item>
          
          ))
        }
        
      </DropdownButton>
    ))}
  </div>
     

          
        </div>
      </div>
      </div> 

      <div className="c">
  Other Countries India-South Africa-Indonesia
<div className="c1">
  Free Classified in Pakistan  @2006-2020 OLX
</div>


</div>


        </div> 
       
       
)}
}
export default Post;
