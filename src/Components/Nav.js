import React from 'react'
import '../Styling/Nav.css'
import {NavLink} from 'react-router-dom'

export default class Nav extends React.Component{
    render(){
        return(
            <nav className='nav'>
                <h1 id="webTitle">Recipe Collector</h1>
                <NavLink id ='logout' to='/login'>Logout</NavLink>

            </nav>
        )
    }
}