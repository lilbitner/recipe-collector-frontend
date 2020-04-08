import React from 'react'
import Nav from './Nav'
import RecipeCard from './RecipeCard'

export default class RecipeBook extends React.Component {
    
   state = {
       recipeObject: {},
       isRecipes: false
   }
   
   
    componentDidMount(){
        fetch(`http://localhost:5000/recipes/${localStorage.user_id}`)
        .then(response => response.json())
        // .then(console.log)
        .then(recipes => {
            this.setState({recipeObject: recipes, isRecipes: true })
            // recipes.recipes.map(recipe => {return <RecipeCard {...recipe}/>})
        })
    }


    makeRecipeCard = () => {
       const recipeArray= this.state.recipeObject.recipes
       console.log('recipes', recipeArray)
        recipeArray.map(recipe => {
           return <RecipeCard {...recipe}/>
        })
    }
    
    
    render() {

        // const makeRecipeCard = () => {this.state.recipeObject.map(recipe => <RecipeCard {...recipe} />)}
        return(
            <>
            <Nav user={this.props.user} />
            <h1>Recipe Book</h1>
            {this.state.isRecipes ? this.makeRecipeCard() : null}
            </>
        )
    }
}