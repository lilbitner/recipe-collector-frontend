import React from 'react'
import LoginForm from './loginForm'
import '../Styling/SignUp.css'
import {Redirect} from 'react-router-dom'

export default class Login extends React.Component {


   
    
    render(){
        return(
            <div className='mainBody'>
                <div className='signup'> 
                    <h1>Welcome to Recipe Collector</h1>
                    <h1 id='signupTitle'>Login</h1>
                    <LoginForm {...this.props} login={this.props.login} />
                    {this.props.isLoggedIn? this.props.history.push('/') : null}
                    {!this.props.isCorrectUser? <h2>Incorrect user credentials, please try again</h2>: null}
                </div>
            </div>
        )
    }
}