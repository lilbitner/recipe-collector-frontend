import React from 'react'
import '../Styling/Nav.css'
import {NavLink, Link} from 'react-router-dom'

export default class Nav extends React.Component{
    render(){
        return(
            <nav className='nav'>
                <Link to='/' id="webTitle">Recipe Collector</Link>
                <NavLink id ='logout' to='/login'>Logout</NavLink>

            </nav>
        )
    }
}