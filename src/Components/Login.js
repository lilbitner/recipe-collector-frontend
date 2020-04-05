import React from 'react'
import LoginForm from './loginForm'
import '../Styling/SignUp.css'
import {Redirect} from 'react-router-dom'

export default class Login extends React.Component {
    
    // goToHome = () => {
    //     if (this.props.isLoggedIn) 
    //     {return <Redirect to='/' />} 
    //  }
    
    
    render(){
        return(
            <div className='mainBody'>
                <div className='signup'> 
                    <h1>Welcome to Recipe Collector</h1>
                    <h1>Login</h1>
                    <LoginForm {...this.props} login={this.props.login} />
                    {this.props.isLoggedIn? this.props.history.push('/') : null}
                    {/* {this.goToHome()}  */}
                </div>
            </div>
        )
    }
}