import React from "react";
import './App.css';
import '../HomePage.css';
//import Info from '../info/Info';
//import Fix from '../fix/Fix';
//import Btn from '../btn/Btn';
//import Servicios from '../servicios/Servicios';
//import Tecnology from '../tecnology/Tecnology';
//import Promo from '../promo/Promo';
//import Inicio from './components/principal/Inicio';
//import Routes from './Routes';
import Inicio from './components/principal/Inicio';
import Routes from './Routes';
import Footer from './components/Footer';
class HomePage extends React.Component {

    changeRoute = () => {
        this.props.history.push("/");  
    }
    render(){

        return (
            <div>
            <Inicio/><Footer/> <Routes/> </div>

        );
    }
}

export default HomePage;