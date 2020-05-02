import React from "react";
import { Route, Link } from 'react-router-dom';
import Pizza from './components/Pizza';
import { useHistory } from 'react-router-dom';

const App = () => {
  const history = useHistory();
  console.log(history);
  const routeToPizza = event => {
    history.push("/pizza");
  };
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
      <button onClick={routeToPizza}>Order Pizza</button>
      <Route exact path='/' component='Home' />
      <Route path='/pizza'>
        <Pizza />
      </Route>
    </div>
  );
};
export default App;
