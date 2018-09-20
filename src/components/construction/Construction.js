import React from 'react';
import css from './Construction.css';

class Construction extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div className={css.back}>
                  
                </div>
                    <p className={css.text}>Este apartado esta en construccion</p>
               
            </div>

        );
    }
}

export default Construction;