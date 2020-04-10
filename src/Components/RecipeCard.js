import React from 'react'
import '../Styling/RecipeCard.css'
import {Link} from 'react-router-dom'

export default class RecipeCard extends React.Component{
    
    
    
    render(){
        return(
            <div className='recipeCard'>
                {this.props.title.length !== 0 ? <h3>{this.props.title}</h3> : null }
                {this.props.description.length !== 0 ? <h4>{this.props.description}</h4> : null }
                {this.props.url.length !== 0 ? <Link>{this.props.url}</Link> : null }
                {this.props.image.length !== 0 ? <img id='recipeImage' src={this.props.image} /> : null }
                {/* <img id='recipeImage' src={this.props.image} /> */}
                {/* <button>Delete Recipe</button> */}
            </div>
        )
    }
}