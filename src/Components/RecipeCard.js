import React from 'react'
import '../Styling/RecipeCard.css'

export default class RecipeCard extends React.Component{
    
    
    
    render(){
        return(
            <div className='recipeCard'>
                <h3>{this.props.title}</h3>
                {/* <h4>{this.props.category}</h4> */}
                <img id='recipeImage' src={this.props.image} />
                <button>Delete Recipe</button>
            </div>
        )
    }
}