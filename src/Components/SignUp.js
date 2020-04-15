import React from 'react'
import '../Styling/SignUp.css'
import LoginForm from './loginForm'
import {Link, Redirect} from 'react-router-dom'

export default class signUp extends React.Component{
    
    state = {
        isLoaded: false
    }

    componentDidMount() {
        // this.setState({isLoaded: true})
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        // window.location.href = window.location.href 
    }

    reloadPage = () => {
        window.location.reload()
    }
    
    render() {
        return(
            <div className='mainBody'>
                <div className='signup'> 
                    <h1>Welcome to Recipe Collector</h1>
                    <h1>Sign-up</h1>
                    <LoginForm {...this.props} login={this.props.createUser}/> 
                    <Link to='/login' id='loginLink'>Already have an account? Login here</Link>
                    {/* {!localStorage.token ? this.reloadPage() : null} */}
                    {this.props.isUser? <h2>Welcome! Please Login!</h2> : null}
                    {this.props.isCreatedUser? <h2>Could not register account, please try again with unique username</h2> :null}
                    {this.props.isPasswordShort? <h2>Password must be at least 5 characters</h2>: null}
                </div>
            </div>
        )
    }
}