import React from 'react'
import LoginForm from './loginForm'
import '../Styling/SignUp.css'

export default class Login extends React.Component {
    render(){
        return(
            <div className='mainBody'>
                <div className='signup'> 
                    <h1>Welcome to Recipe Collector</h1>
                    <h1>Login</h1>
                    <LoginForm {...this.props} login={this.props.login} /> 
                </div>
            </div>
        )
    }
}