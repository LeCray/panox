import React, { Component}  from 'react';
import { Switch, Route } from 'react-router-dom'

import Landing from '../Pages/Landing/Landing';
import Account from '../Pages/Account/Account';
//import Support from './Support';


const Main = () => (
  <main>
    <Switch>
    	<Route exact path="/" component={Landing}/>
    	<Route exact path="/Account" component={Account}/>        	        
    </Switch>
  </main>
)

export default Main;