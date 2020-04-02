import React from 'react'
import '../Styling/SignUp.css'

export default class signUp extends React.Component{
    render() {
        return(
            <div className='signup'> 
                <h1>Sign-up</h1>
                <div className='inputContainer'> 
                    <input className='signupInput' type='text' name='Ssername' placeholder='Username' />
                    <input className='signupInput' type='text' name='Password' placeholder='Password'/>
                    <input className='signupSubmit' type='submit'/>
                </div>
            </div>

        )
    }
}