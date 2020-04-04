import React from 'react'
import LoginForm from './loginForm'
import '../Styling/SignUp.css'
import {Redirect} from 'react-router-dom'

export default class Login extends React.Component {
    
    goToHome = () => {
        if (this.props.isLoggedIn) 
        {return <Redirect to='/home' />} 
     }
    
    
    render(){
        return(
            <div className='mainBody'>
                <div className='signup'> 
                    <h1>Welcome to Recipe Collector</h1>
                    <h1>Login</h1>
                    <LoginForm {...this.props} login={this.props.login} />
                    {this.goToHome()} 
                </div>
            </div>
        )
    }
}