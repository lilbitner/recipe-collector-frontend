import React from 'react'
import Nav from './Nav'
import RecipeCard from './RecipeCard'
import '../Styling/RecipeBook.css'


export default class RecipeBook extends React.Component {
    
   state = {
       Categories: ["Appetizer", "Entreé", "Dessert", "Sides", "Salads", "Holiday", "Beverage", "Brunch", "Miscellaneous"],
       filteredRecipes: [],
    //    Appetizers: [],
       Appetizer: false,
    //    Entreés: [],
       Entreé: false,
    //    Desserts: [],
       Dessert: false,
    //    Sides: [],
       Sides: false,
    //    Salad: [],
       Salads: false,
    //    Holiday: [],
       Holiday: false,
    //    Brunch: [],
       Brunch: false,
    //    Beverages: [],
       Beverage: false,
    //    Miscellaneous: [],
       Miscellaneous: false
   }

   

   updatesState = (id) => {
        this.setState({
            filteredRecipes: this.state.filteredRecipes.filter(recipe => recipe.id !== id)
            // Appetizers: this.state.Appetizers.filter(recipe => recipe.id !== id), 
            // Entreés: this.state.Entreés.filter(recipe => recipe.id !== id), 
            // Desserts: this.state.Desserts.filter(recipe => recipe.id !== id), 
            // Sides: this.state.Sides.filter(recipe => recipe.id !== id), 
            // Salads: this.state.Salads.filter(recipe => recipe.id !== id), 
            // Holiday: this.state.Holiday.filter(recipe => recipe.id !== id), 
            // Brunch: this.state.Brunch.filter(recipe => recipe.id !== id), 
            // Beverages: this.state.Beverages.filter(recipe => recipe.id !== id), 
            // Miscellaneous: this.state.Miscellaneous.filter(recipe => recipe.id !== id)
        })
   }
   

    
    showAppetizers = (props) => {
        this.setState({isAppetizers: false, isEntreés: false, isBrunch: false,
            isDesserts: false, isBeverages: false, isMiscellaneous: false, isSides: false,
            isSalads: false, isHoliday: false
        })
        const appetizerArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Appetizer'})
        this.setState({Appetizers: appetizerArray, isAppetizers: true})
    }
    
    showEntrees = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBrunch: false,
            isDesserts: false, isBeverages: false, isMiscellaneous: false, isSides: false,
            isSalads: false, isHoliday: false
        })
      const entreeArray = this.props.recipes.filter(recipe => {
          return recipe.category == 'Entreé'})
          this.setState({Entreés: entreeArray, isEntreés: true})
    }
    
    showDesserts = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBrunch: false,
            isDesserts: false, isBeverages: false, isMiscellaneous: false, isSides: false,
            isSalads: false, isHoliday: false
        })
        const dessertArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Dessert'})
            this.setState({Desserts: dessertArray, isDesserts: true})
    }

    showSides = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBrunch: false,
            isDesserts: false, isBeverages: false, isMiscellaneous: false, isSides: false,
            isSalads: false, isHoliday: false
        })
        const sideArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Sides'})
            this.setState({Sides: sideArray, isSides: true})
    }

    showSalads = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBrunch: false,
            isDesserts: false, isBeverages: false, isMiscellaneous: false, isSides: false,
            isSalads: false, isHoliday: false
        })
        const saladArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Salads'})
            this.setState({Salads: saladArray, isSalads: true})
    }

    showHoliday = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBrunch: false,
            isDesserts: false, isBeverages: false, isMiscellaneous: false, isSides: false,
            isSalads: false, isHoliday: false
        })
        const holidayArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Holiday'})
            this.setState({Holiday: holidayArray, isHoliday: true})
    }
    
    showBeverages = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBrunch: false,
            isDesserts: false, isBeverages: false, isMiscellaneous: false, isSides: false,
            isSalads: false, isHoliday: false
        })
        const drinkArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Beverage'})
            this.setState({Beverages: drinkArray, isBeverages: true})
    }
    
    showBrunch = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBrunch: false,
            isDesserts: false, isBeverages: false, isMiscellaneous: false, isSides: false,
            isSalads: false, isHoliday: false
        })
        const breakfastArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Brunch'})
            this.setState({Brunch: breakfastArray, isBrunch: true})
    }
    
    showMiscellaneous = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBrunch: false,
            isDesserts: false, isBeverages: false, isMiscellaneous: false, isSides: false,
            isSalads: false, isHoliday: false
        })
        const otherArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Miscellaneous'})
            this.setState({Miscellaneous: otherArray, isMiscellaneous: true})
    }

    // handleChange = (e) => {
    //     let filteredRecipes = []; 
    //     let newList = [];
    //     if (e.target.value !== "") {
    //         let recipes = this.state.filteredRecipes;
    //         let newList = recipes.filter(recipe => {
    //         const lc = recipe.title.toLowerCase();
                
    //         const filter = e.target.value.toLowerCase();
    //         return lc.includes(filter);
    //   });
    //     } else {
    //         return this.handleClick()
    //     }
    //         this.setState({
    //         filteredRecipes: newList
    //     });
    // }

    handleClick = (e) => {
        this.setState({Appetizer: false, Entreé: false, Brunch: false,
            Dessert: false, Beverage: false, Miscellaneous: false, Sides: false,
            Salads: false, Holiday: false, filteredRecipes: []
        })
        let category = e.target.textContent 

        let filteredRecipes = this.props.recipes.filter(recipe => {
            return recipe.category == category})
            this.setState({filteredRecipes: filteredRecipes, [category]: true})
    }

    buttons = () => {
        return this.state.Categories.map(category => <button onClick={this.handleClick} key={category} 
            className='recipeButton'>{category}</button>)
    }

    handleChange = (e) => {
        let filteredRecipes = []; 
        let newList = [];
        if (e.target.value !== "") {
            console.log(e.target.value)
            filteredRecipes = this.state.filteredRecipes;
            // console.log(recipes)
            newList = filteredRecipes.filter(recipe => {
            const lc = recipe.title.toLowerCase();
            console.log(lc)
                
            const filter = e.target.value.toLowerCase();
            console.log('filter', lc.includes(filter))
            return lc.includes(filter);
      });
        } else {
            
        }
            this.setState({
            filteredRecipes: newList
        });
    }



    render() {
 
        return(
            <>
                <Nav user={this.props.user} />
                <div className='recipeBook'>
                    <div className='buttonsContainer'>
                        {this.buttons()}
                        {/* <button onClick={this.showAppetizers} className='recipeButton'>Appetizers</button>
                        <button onClick={this.showEntrees} className='recipeButton'>Entreés</button>
                        <button onClick={this.showDesserts} className='recipeButton'>Dessert</button>
                        <button onClick={this.showSides} className='recipeButton'>Sides</button>
                        <button onClick={this.showSalads} className='recipeButton'>Salad</button>
                        <button onClick={this.showHoliday} className='recipeButton'>Holiday</button>
                        <button onClick={this.showBrunch} className='recipeButton'>Brunch</button>
                        <button onClick={this.showBeverages} className='recipeButton'>Beverages</button>
                        <button onClick={this.showMiscellaneous} className='recipeButton'>Miscellaneous</button> */}
                    </div> 
                    <input type='text' className='search' onChange={this.handleChange} placeholder="Search..." />
                <div className='recipeBody'> 
                    {this.state.Appetizer ? this.state.filteredRecipes.map(recipe => <RecipeCard updatesState={this.updatesState} 
                        key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                    }
                    {this.state.Entreé ? this.state.filteredRecipes.map(recipe => <RecipeCard updatesState={this.updatesState} 
                        key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>): null
                    }
                    {this.state.Dessert ? this.state.filteredRecipes.map(recipe => <RecipeCard updatesState={this.updatesState} 
                        key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                    }
                    {this.state.Brunch ? this.state.filteredRecipes.map(recipe => <RecipeCard updatesState={this.updatesState}
                         key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                    }
                    {this.state.Beverage ? this.state.filteredRecipes.map(recipe => <RecipeCard updatesState={this.updatesState} 
                        key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                    }
                    {this.state.Miscellaneous ? this.state.filteredRecipes.map(recipe => <RecipeCard updatesState={this.updatesState} 
                        key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                    }
                    {this.state.Sides ? this.state.filteredRecipes.map(recipe => <RecipeCard updatesState={this.updatesState} 
                        key={recipe.id} deleteRecipe={this.props.deleteRecipe} {...recipe}/>) : null
                    }
                    {this.state.Salads ? this.state.filteredRecipes.map(recipe => <RecipeCard updatesState={this.updatesState} 
                        key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                    }
                    {this.state.Holiday ? this.state.filteredRecipes.map(recipe => <RecipeCard updatesState={this.updatesState} 
                        key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null
                    }
                </div>
                </div>
            </>
        )
    }
}