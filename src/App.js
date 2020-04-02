import React from 'react';
import './App.css';
import SignUp from './Components/SignUp'
import {Route, Switch} from 'react-router-dom'
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <Switch> 
        <Route exact to='/' component={SignUp}/>
        <Route to='/login' component={Login} />
      </Switch>
    
    </div>
  );
}

export default App;
