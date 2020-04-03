import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component{
    render() {
        return(
            <>
            <h1> {this.props.user.username ? `Welcome to Recipe Collector ${this.props.user.username}`: null}</h1>
            <Link to='/login'>Logout</Link>
            </>
        )
    }
}