import React from 'react';
import './App.css';
import SignUp from './Components/SignUp'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home'

class App extends React.Component {
  
  state= {
    user: {}
  }

  createUser = (user) => {
    fetch("http://localhost:5000/users", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: user.username, password: user.password})
    }).then(response => response.json())
    .then(() => this.props.history.push('/login'))
  }


  // componentDidMount() {
  //   if(localStorage.token){
  //     fetch('profile method in controller', {
  //     method: "GET",
  //     headers: {
  //       'Authorization': `Bearer ${localStorage.token}`
  //     }
  //     })
  //     .then(response => response.json())
  //     .then(result => this.setState({user: result.user}))
  //   }
  // }

  login = (user) => {
    fetch("http://localhost:5000/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: user.username, password: user.password})
    }).then(response => response.json())
    .then(result => {
      localStorage.setItem('token', result.jwt)
      this.setState({user: result.user})
    })
  }


  render() {

    return (
      <div className="App">
        <Switch> 
          <Route path='/signup' render={(props) => <SignUp {...props} createUser={this.createUser}/>}/> 
          <Route path='/login' render={(props)=> <Login {...props} login={this.login} />}/>
          <PrivateRoute exact path='/' />
          <Route render={() => <Redirect to='/'/>}/>
          <Route path='/home' render={(props) => <Home user={this.state.user} {...props}/>}/>
        </Switch>
      
      </div>
    );
  }
}

export default App;
