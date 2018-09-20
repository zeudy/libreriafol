import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './HomePage';

import GlosarioHome from './components/Glosario/GlosarioHome';

import Construction from './components/construction/Construction';






const Routes = () => (
    <Switch>
     
      <Route exact path="/" component={HomePage}/>
          <Route path="/Quienes" component={GlosarioHome}/>
         <Route path="/Cons" component={Construction}/>
         

        


    </Switch>

);

export default Routes;