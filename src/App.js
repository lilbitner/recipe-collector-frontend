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
    user: [],
    isUser: false,
    isCreatedUser: false,
    isLoggedIn: false,
    isCorrectUser: true
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
        // localStorage.setItem('userId', response.id)
        this.setState({isUser: true})
      } else {this.setState({isCreatedUser: true})}
    })
  }
    


  componentDidMount() {
    if(localStorage.token){
      fetch(`http://localhost:5000/users/authenticate`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
      })
      .then(response => response.json())
      .then(result => this.setState({user: result.user}))
    }
  }

  login = (user) => {
   fetch("http://localhost:5000/users/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: user.username, password: user.password})
    })
    // .then(response => {
    //   if(response.status == 401)
    //   { this.setState({isCorrectUser: false}) }
    // })
    .then(response => response.json())
    .then(response => {
      if(response.status == 401)
      { this.setState({isCorrectUser: false}) }
     else {
      localStorage.setItem('token', response.token)
      localStorage.setItem('user_id', response.foundUser.id)
      this.setState({isLoggedIn: true, user: response.foundUser})}
     })
    
    
  

    // .then(response => {
    //   if(response.status == 401)
    //   { this.setState({isCorrectUser: false}) } else {
    //     // this.setState({user: response.foundUser, isLoggedIn: true})
    //     localStorage.setItem('token', response.token)
    //     this.setState({isLoggedIn: true})}
    //     // localStorage.setItem('userId', response.foundUser.id)
    //     // this.setState({user: response.foundUser, isLoggedIn: true})
    //   // } else {}
    // })
  }

  addRecipe = (recipe) => {
    console.log('recipe', recipe)
    
    fetch('http://localhost:5000/recipes', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title: recipe.title, category: recipe.category, image: recipe.image, user_id: recipe.user_id})
    })
  }


  render() {

    return (
      <div className="App">
        <Switch> 
          <PrivateRoute exact user={this.state.user} path='/' />
          {/* <Route render={() => <Redirect to='/signup'/>}/> */}
          <Route path='/signup' render={(props) => <SignUp {...props} 
            isUser={this.state.isUser} isCreatedUser={this.state.isCreatedUser} createUser={this.createUser}/>}
          /> 
          {/* <Route render={() => <Redirect to='/signup'/>}/> */}
          <Route path='/login' render={(props)=> <Login {...props} 
            isLoggedIn={this.state.isLoggedIn} isCorrectUser={this.state.isCorrectUser} login={this.login} />}
          />
          {/* <Route render={() => <Redirect to='/signup'/>}/> */}
          {/* <Route path='/' render={(props) => <Home user={this.state.user} {...props}/>}/> */}
          <Route path='/book' render={(props) => <RecipeBook user={this.state.user} {...props} />}/>  
          <Route path='/notes' render={(props) => <RecipeNotes user={this.state.user} {...props} />}/>  
          <Route path='/add' render={(props) => <AddToRecipeBook addRecipe={this.addRecipe} user={this.state.user} {...props} />}/>  
          <Route render={() => <Redirect to='/signup'/>}/>
        </Switch>
      
      </div>
    );
  }
}


export default App;
