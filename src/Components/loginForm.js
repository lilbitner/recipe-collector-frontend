import React from 'react'

export default class LoginForm extends React.Component {
    render() {
        return(
            <div className='inputContainer'> 
                <input className='signupInput' type='text' name='Ssername' placeholder='Username' />
                <input className='signupInput' type='text' name='Password' placeholder='Password'/>
                <input className='signupSubmit' type='submit'/>
            </div>
        )
    }
}