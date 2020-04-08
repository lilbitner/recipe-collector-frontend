import React from 'react'
import '../Styling/RecipeCard.css'

export default class RecipeCard extends React.Component{
    
    
    
    render(){
        return(
            <div className='recipeCard'>
                <h3>{this.props.recipe.title}</h3>
                <h4>{this.props.recipe.category}</h4>
                <image src={this.props.recipe.image} />
            </div>
        )
    }
}