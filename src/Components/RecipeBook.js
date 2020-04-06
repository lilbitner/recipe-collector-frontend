import React from 'react'
import Nav from './Nav'

export default class RecipeBook extends React.Component {
    render() {
        return(
            <>
            <Nav user={this.props.user} />
            <h1>Recipe Book</h1>
            </>
        )
    }
}