import React, {Component} from 'react';
import './Video.css';
import {Link} from 'react-router-dom';

class Video extends Component {

    render() {
        return (
            <div className="box_video">
                <div style={{width:"80%", margin:"50px auto"}}>
                    <div className="flex">
                        <div className="boxi">
                            <iframe title="video" className="video"  src="https://www.youtube.com/embed/HomHS0GA_E0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
                        </div>
                        <div className=" boxi text_video">
                            <h3>Librería Fiscal Fol.</h3> <br/>
                            <p>Conoce más sobre nosotros y nuestros servicios.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;