import React from 'react'
import Nav from './Nav'

export default class RecipeNotes extends React.Component {
    render() {
        return(
            <>
            <Nav user={this.props.user}/>
            <h1>RecipeNotes</h1>
            </>
        )
    }
}