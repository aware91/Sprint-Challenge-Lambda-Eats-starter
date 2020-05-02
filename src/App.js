import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import Pizza from './components/Pizza';

const App = () => {

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/help'>Help</Link>
        </div>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Pizza />
        </Route>
        <Route path='/' component='Home' />
      </Switch>
    </div>
  );
};
export default App;
