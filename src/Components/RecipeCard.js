import React from 'react'
import '../Styling/RecipeCard.css'
import {Link} from 'react-router-dom'
// import Zoom from 'react-img-zoom'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default class RecipeCard extends React.Component{
    
    state = {
        recipeId: '',
        rotation: 0
    }
    
    handleClick = (event) => {
        event.preventDefault()
        console.log(event)
        this.props.deleteRecipe(this.props.id)
     }
    handleRotation = (event) => {
        let newRotation = this.state.rotation + 90;
        if(newRotation >= 360){
        newRotation =- 360;
    }
        this.setState({
        rotation: newRotation,
    })
    }


    render(){
        return(
            <div className='recipeCard'>
                {this.props.title.length !== 0 ? <h3>{this.props.title}</h3> : null }
                {this.props.description.length !== 0 ? <h4 id='description'>{this.props.description}</h4> : null }
                {this.props.url.length !== 0 ? <a href={this.props.url}>Recipe URL</a> : null }
                {this.props.image.length !== 0 ? <Zoom> <img id='recipeImage' src={this.props.image} style={{width: '50%',
                     height: '100%', marginLeft: '25%', marginTop: '0%', transform: `rotate(${this.state.rotation}deg)`}}  /></Zoom> : null 
                }
                {/* {this.props.image.length !== 0 ? <img id='recipeImage' src={this.props.image} /> : null } */}
                {/* <img id='recipeImage' src={this.props.image} /> */}
                <div className='buttonContainer'>
                    <button id='deleteButton' onClick={this.handleRotation}>Rotate Image</button>
                    <button id='deleteButton' onClick={this.handleClick}>Delete Recipe</button>
                </div>
            </div>
        )
    }
}