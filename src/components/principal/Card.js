import React , {Component} from 'react';
import '../../App.css';
import { Card, Col, Row } from 'antd';
import Footer from './../Footer';
 


class Car extends React.Component {

    changeRoute = () => {
        this.props.history.push("/");  
    }
   render (){
    
       return (

    
<div>
<br/>

<div style={{  backgroung:'#3D60FF', position:'absolute', title:'Inner Card title',
    top: '230px', paddingLeft:'280px', width:'3000px' }}>
<Row gutter={30}>
<Col span={8}>
 <Card title="Inner Card title" align= "center" title="LIBRERIA FISCAL FOL" bordered={false}>Empresa comprometida en ofrecer soluciones 
 y servicios para  el adecuado cumplimiento de sus obligaciones fiscales. <br/> <br/> <br/>
 < img src="https://mail.google.com/mail/u/0/?ui=2&ik=a06f178890&view=att&th=165d3e8814f0b0ff&attid=0.6&disp=safe&realattid=f_jm0tw9665&zw" width="150" height="150" /> <br/></Card>
</Col>

</Row>
</div>

<br/> <br/> <br/><br/><br/><br/><br/><br/><br/><br/>
<Footer/>

</div> 
 
 );
}
}

export default Car;