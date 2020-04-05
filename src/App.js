import React from 'react';
import './App.css';
import SignUp from './Components/SignUp'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home'
import RecipeBook from './Components/RecipeBook'
import RecipeNotes from './Components/RecipeNotes'
import AddToRecipeBook from './Components/AddToRecipeBook'

class App extends React.Component {
  
  state= {
    user: {},
    isUser: false,
    isLoggedIn: false
  }

  createUser = (user) => {
    fetch("http://localhost:5000/users", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: user.username, password: user.password})
    }).then(response => {
      if (response.status === 201) 
      {
        this.setState({isUser: true})
      } else {}
    })
  }
    


  // componentDidMount() {
  //   if(localStorage.token){
  //     fetch('http://localhost:5000/user', {
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
    })
    .then(response => {
      if(response.status === 200)
      { 
        localStorage.setItem('token', response.token)
        // localStorage.setItem('userId', response.foundUser.id)
        this.setState({user: response.foundUser, isLoggedIn: true})
      }
    })
  }


  render() {

    return (
      <div className="App">
        <Switch> 
          <Route path='/signup' render={(props) => <SignUp {...props} 
            isUser={this.state.isUser} createUser={this.createUser}/>}
          /> 
          <Route path='/login' render={(props)=> <Login {...props} 
            isLoggedIn={this.state.isLoggedIn} login={this.login} />}
          />
          <PrivateRoute path='/' />
          <Route render={() => <Redirect to='/'/>}/>
          <Route path='/home' render={(props) => <Home user={this.state.user} {...props}/>}/>
          {/* <Route path='/book' component={RecipeBook}/> 
          <Route path='/notes' component={RecipeNotes}/>
          <Route exact path='/add' render={(props) => <AddToRecipeBook {...props} />}/>  */}
        </Switch>
      
      </div>
    );
  }
}


export default App;
