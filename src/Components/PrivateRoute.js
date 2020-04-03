import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from './Home'

export default function PrivateRoute(props) {
    return <Route render = {(routerProps) => {
        return localStorage.token? <Home {...routerProps} /> : <Redirect to='/signup'/>
    }} />
}