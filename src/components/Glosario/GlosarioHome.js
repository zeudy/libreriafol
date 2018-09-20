import React, {Component} from 'react';

import Imagen from './Imagen';
import './Glosario.css';
import { Card, Col, Row } from 'antd';
import Footer from './../Footer';





class GlosarioHome extends Component{  


    

   
    changeRoute = () => {
        this.props.history.push("/");  
    }

    
    render(){
        

         
        
         return(
        
            
          <div className="titulo"> 
            
              
               
                  <h1>QUIENES SOMOS</h1>
                
                  
    
              

<div>
  <br/>

  
</div> 
</div> 
        
        );
    }
}

export default GlosarioHome;