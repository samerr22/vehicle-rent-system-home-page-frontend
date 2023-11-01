import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import usEr from '/image/user.png';
import React from 'react';
import Card from 'react-bootstrap/Card';
import s55 from '/image/55.png';
import Star from '/image/star.png';
import { Link } from 'react-router-dom';
import Car from '/image/car.jpg';
import Car1 from '/image/car.jpg';
import CardText from 'react-bootstrap/esm/CardText';





function ghome(){


  const  setSelectedDateTime = useState('');

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(event.target.value);
  };

  const  setSelectedArea = useState('');

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };


  const bodyStyle = {
    backgroundImage: `url(${Car})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    height: '800px',
    width: '1500px'
    
  };

    const headerStyle = {
      backgroundColor: '#f98029',
      backgroundImage: `url(${Car1})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    width: '300px' ,
        
        color: '#fff',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height : '100px'
      };

      const searchBarStyle = {
        display: 'flex',
        alignItems: 'center',

  
       
      };
    
      const userActionsStyle = {
        display: 'flex',
        alignItems: 'center',
        
      

      };

      const bottomstyle = {
        
        backgroundColor: ' red',
      }
 
    return(

      <div>
<header style={headerStyle}>
  <div style={{marginLeft: '100px'}}>
  <div style={{fontSize: '40px',fontFamily: 'Impact',}}>Car</div>
      </div>
     
      
      <div style={userActionsStyle}>

        <a style={{marginLeft: '160px', color: '#515151',fontFamily: 'Impact', fontSize: '20px'}}> DEALS</a>
        <a style={{marginLeft: '90px',color: '#515151',fontFamily: 'Impact',fontSize: '20px'}}>lOCATONS</a>
        <a  style={{marginLeft: '120px',color: '#515151',fontFamily: 'Impact',fontSize: '20px'}}> GUIDE</a>
        <a  style={{marginLeft: '130px', color: '#515151',fontFamily: 'Impact',fontSize: '20px'}}>SERVICES</a>
        <a  style={{marginLeft: '160px', color: '#515151',fontFamily: 'Impact',fontSize: '20px'}}>BUSINESS</a>
        <div style={{marginLeft: '10px'}}>
        <a  style={{marginLeft: '155px', color: 'red'}}>JOIN</a>
        <a  style={{marginLeft: '10px', color: 'red'}}>|</a>
        <a  style={{marginLeft: '10px', color: 'red'}}>LOGIN</a>
        </div>
        <div style={{marginLeft: '20px'}}></div>
        <div style={{marginRight: '200px'}}>Cart</div>
      </div>  
 </header>

  <div style={{backgroundColor: 'red'}}>
        
        <hr className="middle-line" style={{color: '#f98029', bottom: '70px',height: '5px',width: '100%', position: 'absolute' }}/>
        <h1 style={{color: '#f98029',bottom: '60px',position: 'absolute',fontSize: '15px', marginLeft: '1200px'}}> About us</h1>
        <h1 style={{color: '#f98029',bottom: '40px',position: 'absolute',fontSize: '15px', marginLeft: '1200px'}}> Terms & Condition</h1>
        <h1 style={{color: '#f98029',bottom: '20px',position: 'absolute',fontSize: '15px', marginLeft: '1200px'}}> Privacy police</h1>
        <h1 style={{color: '#f98029',bottom: '0px',position: 'absolute',fontSize: '15px', marginLeft: '1200px'}}> Contact us</h1>
      </div>

    
        <div style={bodyStyle}>

      
     
      <Card style={{ width: '40rem', 
                     height: '25rem',  
                     border: 'none', 
                     backgroundColor: 'rgba(255, 195, 0, 0.8)',
               
                     top: '50px', 
                     marginLeft: '150px' }}>
      


      
      <Card.Body>
        <CardText style={{position: 'absolute',fontSize: '40px', marginLeft: '70px', top:'10px',fontFamily: 'Garamond' }}> Book a Car Reant</CardText>
        
          
        <h3 style={{position: 'absolute', left: '70px',top: '80px',fontFamily: 'Garamond',fontSize: '15px'}}>Pic-up Location</h3>
   <input style={{position: 'absolute', left: '70px',top: '100px',background: 'rgb(245, 242, 242)',borderRadius: '50px',border: 'none',width: '200px'}}></input>
   <h3 style={{position: 'absolute', left: '320px',top: '80px',fontFamily: 'Garamond',fontSize: '15px'}}>Return Location </h3>
   <input style={{position: 'absolute', left: '320px',top: '100px',background: 'rgb(245, 242, 242)',borderRadius: '50px',border: 'none',width: '200px'}}></input>
       
        
    
   <div style={{position: 'absolute',left:'70px',top: '170px'}}>
      <label style={{position: 'absolute',top: '-20px',fontFamily: 'Garamond'}}>Pic-Up Date and Time:</label>
      <input
        type="datetime-local"
        id="datetime"
        name="datetime"
        onChange={handleDateTimeChange}
      />
      
    </div>

    <div style={{position: 'absolute',left:'320px',top: '170px'}}>
      <label  style={{position: 'absolute',top: '-20px',fontFamily: 'Garamond'}}>Return Date and Time:</label>
      <input
        type="datetime-local"
        id="datetime"
        name="datetime"
        onChange={handleDateTimeChange}
      />
      
    </div>


    <div style={{position: 'absolute',top: '240px', width: '50px'}}>
      
      <label  style={{position: 'absolute',top: '-20px',left: '55px',fontFamily: 'Garamond' }}> Area:</label>
      <select
        id="area"
        name="area"
        style={{ marginLeft: '55px' }}
        onChange={handleAreaChange}
      >
        <option value="" >Select an Area</option>
        <option value="Downtown">Downtown</option>
        <option value="Airport" >Airport</option>
        <option value="Suburbs" >Suburbs</option>
        <option value="Beach" >Beach</option>
      </select>
     
    </div>

    <div>
      <button style={{ position: 'absolute', color: 'white', backgroundColor: 'black', width: '200px', height: '30px',top:'320px', left:'200px', border: 'none' }}>
        <span style={{ display: 'inline',marginRight: '45px' }}>SEARCH</span>
        <span style={{ display: 'inline',position: 'absolute',left: '120px' }}>CAR</span>
      </button>
    </div>
    
      </Card.Body>
    </Card>
   
    </div>
          
    </div>

   

    )
}

export default ghome;