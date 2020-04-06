import React from 'react'

export default class LoginForm extends React.Component {
    
    state = {
        username: "",
        password: ""
    }

    componentDidMount() {
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.props.closeForm){ 
        this.props.closeForm(false)}
        this.props.login(this.state)
            // .then(() => this.props.history.push('/'))
    }

    handleChange = (event) => {
        const {name, value} = event.target 
        this.setState({
            [name]: value
        })
    }
    
    
    render() {
        return(
            <form onSubmit={this.handleSubmit} className='inputContainer'> 
                <input type='text' className='signupInput' name='username'
                    value={this.state.username} onChange={this.handleChange} 
                    placeholder='Username' 
                />
                <input type='text' className='signupInput' type='password' name='password' 
                    value={this.state.password} onChange={this.handleChange} 
                    placeholder='Password'
                />
                <input className='signupSubmit' type='submit'/>
            </form>
        )
    }
}