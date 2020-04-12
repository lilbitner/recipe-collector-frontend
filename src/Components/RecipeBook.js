import React from 'react'
import Nav from './Nav'
import RecipeCard from './RecipeCard'
import '../Styling/RecipeBook.css'

export default class RecipeBook extends React.Component {
    
   state = {
       Appetizers: [],
       isAppetizers: false,
       Entreés: [],
       isEntreés: false,
       Desserts: [],
       isDesserts: false,
       Sides: [],
       isSides: false,
       Salads: [],
       isSalads: false,
       Holiday: [],
       isHoliday: false,
       Brunch: [],
       isBrunch: false,
       Beverages: [],
       isBeverages: false,
       Miscellaneous: [],
       isMiscellaneous: false
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
            return recipe.category == 'Side'})
            this.setState({Sides: sideArray, isSides: true})
    }

    showSalads = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBrunch: false,
            isDesserts: false, isBeverages: false, isMiscellaneous: false, isSides: false,
            isSalads: false, isHoliday: false
        })
        const saladArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Salad'})
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
    
    render() {

 
        return(
            <>
                <Nav user={this.props.user} />
                <div className='recipeBook'>
                    <div className='buttonsContainer'>
                        <button onClick={this.showAppetizers} className='recipeButton'>Appetizers</button>
                        <button onClick={this.showEntrees} className='recipeButton'>Entreés</button>
                        <button onClick={this.showDesserts} className='recipeButton'>Dessert</button>
                        <button onClick={this.showSides} className='recipeButton'>Sides</button>
                        <button onClick={this.showSalads} className='recipeButton'>Salad</button>
                        <button onClick={this.showHoliday} className='recipeButton'>Holiday</button>
                        <button onClick={this.showBrunch} className='recipeButton'>Breakfast</button>
                        <button onClick={this.showBeverages} className='recipeButton'>Beverages</button>
                        <button onClick={this.showMiscellaneous} className='recipeButton'>Miscellaneous</button>
                    </div> 
                {/* {this.makeRecipeCard()} */}
                <div className='recipeBody'> 
                    {this.state.isAppetizers ? this.state.Appetizers.map(recipe => <RecipeCard key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null}
                    {this.state.isEntreés ? this.state.Entreés.map(recipe => <RecipeCard key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>): null}
                    {this.state.isDesserts ? this.state.Desserts.map(recipe => <RecipeCard key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null}
                    {this.state.isBrunch ? this.state.Brunch.map(recipe => <RecipeCard key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null}
                    {this.state.isBeverages ? this.state.Beverages.map(recipe => <RecipeCard key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null}
                    {this.state.isMiscellaneous ? this.state.Miscellaneous.map(recipe => <RecipeCard key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null}
                    {this.state.isSides ? this.state.Sides.map(recipe => <RecipeCard key={recipe.id} deleteRecipe={this.props.deleteRecipe} {...recipe}/>) : null}
                    {this.state.isSalads ? this.state.Salads.map(recipe => <RecipeCard key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null}
                    {this.state.isHoliday ? this.state.Holiday.map(recipe => <RecipeCard key={recipe.id} deleteRecipe={this.props.deleteRecipe}  {...recipe}/>) : null}
                </div>
                </div>
                {/* <div className='recipeBody'> 
                    {this.state.isAppetizers ? this.state.Appetizers.map(recipe => <RecipeCard {...recipe}/>) : null}
                </div> */}
                {/* {this.showAppetizers} */}
            </>
        )
    }
}