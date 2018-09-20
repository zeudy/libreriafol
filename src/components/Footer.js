import React from 'react';
import '../components/principal/Inicio.css';


class Footer  extends React.Component {
    render (){
        return (


<div className= "pie">

<h2>   Libreria Fiscal Fol </h2> <br/>
<a href="https://www.facebook.com/Libreria-Fiscal-Fol-1505965916283064/?ref=br_rs"> <img  src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/1226/facebook-icon-preview-1.png"  style={{ width:'70px', position:'absolute', top:'18px', right:'300px'  }}>

</img> </a>
<p style={{ width:'150px', position:'absolute', top:'40px', right:'640px'  }}> Horario: Lunes a Viernes</p><br/>
<p style={{ width:'150px', position:'absolute', top:'60px', right:'635px'  }}> 8:00 a 18:00 hrs </p>


</div>



      );
  }
}


export default  Footer ;