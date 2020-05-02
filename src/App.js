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
    <div className='top'>
      <div className='header'>
        <div className='title'>
          <h1>Lambda Eats</h1>
          <p>You can remove this code and create your own header</p>
        </div>
        <nav className='nav'>
          <Link to='/' className='navButton'>Home</Link>
          <Link to='/help' className='navButton'>Help</Link>
        </nav>
      </div>
      <button onClick={routeToPizza} className='button'>Order Pizza</button>
      <Route exact path="/" />
      <Route path='/pizza'>
        <Pizza />
      </Route>
    </div>
  );
};
export default App;
