import React from 'react'
import Nav from './Nav'
import RecipeCard from './RecipeCard'
import '../Styling/RecipeBook.css'


export default class RecipeBook extends React.Component {
    
   state = {
       Categories: ["Appetizer", "Entreé", "Dessert", "Sides", "Salads", "Holiday", "Beverage", "Brunch", "Miscellaneous"],
       filteredRecipes: [],
       searchedArray: [],
       Appetizer: false,
       Entreé: false,
       Dessert: false,
       Sides: false,
       Salads: false,
       Holiday: false,
       Brunch: false,
       Beverage: false,
       Miscellaneous: false
   }

   

   updatesState = (id) => {
        this.setState({
            searchedArray: this.state.searchedArray.filter(recipe => recipe.id !== id),
            filteredRecipes: this.state.filteredRecipes.filter(recipe =>recipe.id !== id )
        })
   }
    

    handleClick = (e) => {
        this.setState({Appetizer: false, Entreé: false, Brunch: false,
            Dessert: false, Beverage: false, Miscellaneous: false, Sides: false,
            Salads: false, Holiday: false, filteredRecipes: []
        })
        
        let category = e.target.textContent

        let filteredRecipes = this.props.recipes.filter(recipe => {
            return recipe.category == category})
            this.setState({filteredRecipes: filteredRecipes, searchedArray: filteredRecipes, [category]: true})
        }


    buttons = () => {
        return this.state.Categories.map(category => <button onClick={this.handleClick} key={category} 
            className='recipeButton'>{category}</button>)
    }

    handleChange = (e) => {
        let newList = [];
            const {filteredRecipes} = this.state
            newList = filteredRecipes.filter(recipe => {
            const lc = recipe.title.toLowerCase();

            const filter = e.target.value.toLowerCase();
            return lc.includes(filter);
        });
            this.setState({
            searchedArray: newList
        });
    }



    render() {
 
        return(
            <>
                <Nav user={this.props.user} />
                <div className='recipeBook'>
                    <div className='buttonsContainer'>
                        {this.buttons()}
                    </div> 
                    <input type='text' className='search' onChange={this.handleChange} placeholder="Search..." />
                    <div className='recipeBody'> 
                        {this.state.Appetizer ? this.state.searchedArray.map(recipe => <RecipeCard updatesState={this.updatesState} 
                            key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                        }
                        {this.state.Entreé ? this.state.searchedArray.map(recipe => <RecipeCard updatesState={this.updatesState} 
                            key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>): null
                        }
                        {this.state.Dessert ? this.state.searchedArray.map(recipe => <RecipeCard updatesState={this.updatesState} 
                            key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                        }
                        {this.state.Brunch ? this.state.searchedArray.map(recipe => <RecipeCard updatesState={this.updatesState}
                            key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                        }
                        {this.state.Beverage ? this.state.searchedArray.map(recipe => <RecipeCard updatesState={this.updatesState} 
                            key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                        }
                        {this.state.Miscellaneous ? this.state.searchedArray.map(recipe => <RecipeCard updatesState={this.updatesState} 
                            key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                        }
                        {this.state.Sides ? this.state.searchedArray.map(recipe => <RecipeCard updatesState={this.updatesState} 
                            key={recipe.id} deleteRecipe={this.props.deleteRecipe} {...recipe}/>) : null
                        }
                        {this.state.Salads ? this.state.searchedArray.map(recipe => <RecipeCard updatesState={this.updatesState} 
                            key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                        }
                        {this.state.Holiday ? this.state.searchedArray.map(recipe => <RecipeCard updatesState={this.updatesState} 
                            key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                        }
                    </div>
                </div>
            </>
        )
    }
}