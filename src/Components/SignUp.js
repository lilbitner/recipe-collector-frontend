import React from 'react'
import '../Styling/SignUp.css'
import LoginForm from './loginForm'
import {Link} from 'react-router-dom'

export default class signUp extends React.Component{
    render() {
        return(
            <div className='mainBody'>
                <div className='signup'> 
                    <h1>Welcome to Recipe Collector</h1>
                    <h1>Sign-up</h1>
                    <LoginForm /> 
                    <Link to='/login' id='loginLink'>Already have an account? Login here</Link>
                </div>
            </div>
        )
    }
}