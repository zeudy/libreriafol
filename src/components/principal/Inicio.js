import React from 'react';
import  css from './Inicio.css';
import Routes from '../../Routes';
import { Card, Col, Row } from 'antd';
import Button from './button/Button';
import Video from '../video/Video';
import {NavLink} from 'react-router-dom';
import Footer from '../Footer';



class Inicio extends React.Component {
    render (){
      const fuente = {
        fontFamily: 'Helvetica Neue",Helvetica,Arial,sans-serif'};
        return (

<div>


  
       
      <img src={require ('./imagen/doce.jpg')}
      className="fondo"  />

      <div>   <NavLink to="/"> <img src={require ('./imagen/web.png')}
      className="logo" /> </NavLink> </div> <br/>
 
        <Button/>
        
            <div className={css.inf}> <div className={css.inf}> </div> <br/>
            <div className= "vi"> <p> Bienvenidos </p> </div> 
<div className= "pp" style={{ fuente, background: '#E7E7E8',  padding: '30px', width:'1180px', position:'absolute', top:'265px', left:'120px', fontFamily:'Arial, Helvetica, sans-serif', bordered:'10px', borderBlockEndColor:'#2E2E1C'  }}>
<h1 style={{textAlign:'center', }}> <strong>Libreria Fiscal Fol</strong></h1>
<p>____________________________________________________________________________________________________</p>
<p className= "pfond" style={{ fontFamily:'Oswald' }}> Empresa comprometida en ofrecer soluciones 
        y servicios para  el adecuado cumplimiento de sus obligaciones fiscales. </p> <br/>
< img  src="https://mail.google.com/mail/u/0/?ui=2&ik=a06f178890&view=att&th=165d9616b3765ffa&attid=0.1&disp=safe&realattid=f_jm2ck4080&zw"  width="1110" height="450" textAlign="center"  /> <br/>
 </div>

<br/>  <br/>  


</div>     <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/><br/><br/><br/>  <br/>  <br/>  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/> <br/><br/><br/>  <br/><br/><br/> <br/><br/> 



<p className= "valp" style={{ fontFamily:'Oswald', padding: '30px', width:'1180px', position:'absolute', top:'1100px', left:'120px', fontFamily:'Arial, Helvetica, sans-serif', bordered:'10px' }}> ¿Quiénes Somos? </p> <br/>


<div style={{ background: '#ECECEC', padding: '30px'  }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card  align= "center" title="MISION" bordered={false}>Empresa comprometida en ofrecer soluciones 
        y servicios para  el adecuado cumplimiento de sus obligaciones fiscales. <br/> <br/> <br/></Card>
      </Col>
      <Col span={8}>
        <Card align= "center" title="VISION" bordered={false}>SSer una empresa consolidada en la venta 
        y distribución de material fiscal: leyes, revistas, software, cursos  en la República Mexicana 
        a través de diferentes canales de comercialización.
        Tele marketing, Venta directa, Pagina Web, Tienda Virtual, Vía online. 

</Card>
      </Col>
      <Col span={8}>
        <Card align= "center" title="VALORES" bordered={false}>
•	Ética <br/>
•	Honestidad <br/>
•	Compromiso <br/>
•	Responsabilidad <br/>
•	Servicio de calidad <br/>

</Card>
      </Col>
    </Row>
    <Routes/> </div> <div><Video/></div>
    <br/><br/>    </div>  

        );
    }
}
export default Inicio;