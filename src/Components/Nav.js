import React from 'react'
import '../Styling/Nav.css'
import {NavLink, Link} from 'react-router-dom'

export default class Nav extends React.Component{
    render(){
        return(
            <nav className='nav'>
                <h3 id='welcomeName'>Welcome {this.props.user.username}</h3>
                <Link to='/' id="webTitle">Recipe Collector</Link>
                <NavLink id ='logout' to='/signup'>Logout</NavLink>
            </nav>
        )
    }
}