import React , {Component} from 'react';
import { Button } from 'antd';
import {Link,NavLink} from 'react-router-dom';
import {  Menu} from 'antd';
import css from "../../../Nav.css";
import './But.css';
class But extends React.Component {

  
   render (){
       return (




  <div>
   <Link to="/Quienes">    <Button  ghost  style={{   position:'absolute',
   top: '100px', right:'400px'  }}>    CONTACTANOS   </Button></Link>   
   

 <Link to="/cons">    <Button ghost style={{   position:'absolute',
   top: '100px', right:'200px'  }}>  CONTACTANOS   </Button></Link>   
 
  </div>



                  
          );
      }
  }

export default But;


