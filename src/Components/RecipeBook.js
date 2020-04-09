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
       Breakfasts: [],
       isBreakfasts: false,
       Drinks: [],
       isDrinks: false,
       Others: [],
       isOthers: false
   }
   
   
//     componentDidMount(){
//         fetch(`http://localhost:5000/recipes/${localStorage.user_id}`)
//         .then(response => response.json())
//         // .then(console.log)
//         .then(recipes => {
//             this.setState({recipeObject: recipes, isRecipes: true })
//             // recipes.recipes.map(recipe => {return <RecipeCard {...recipe}/>})
//         })
//     }


    // makeRecipeCard = (props) => {
    //     console.log('props', this.props.recipes)
    //     return this.props.recipes.map(recipe => {
    //        return <RecipeCard {...recipe}/>
    //     })
    // }

    setRecipeState = () => {
        this.setState({isAppetizers: false, isEntreés: false})
    }
    
    showAppetizers = (props) => {
        this.setState({isAppetizers: false, isEntreés: false, isBreakfasts: false,
             isDesserts: false, isDrinks: false, isOthers: false})
        const appetizerArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Appetizer'})
        this.setState({Appetizers: appetizerArray, isAppetizers: true})
    }
    
    showEntrees = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBreakfasts: false,
            isDesserts: false, isDrinks: false, isOthers: false})
      const entreeArray = this.props.recipes.filter(recipe => {
          return recipe.category == 'Entreé'})
          this.setState({Entreés: entreeArray, isEntreés: true})
    }
    
    showDesserts = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBreakfasts: false,
            isDesserts: false, isDrinks: false, isOthers: false})
        const dessertArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Dessert'})
            this.setState({Desserts: dessertArray, isDesserts: true})
    }
    
    showDrinks = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBreakfasts: false,
            isDesserts: false, isDrinks: false, isOthers: false})
        const drinkArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Drink'})
            this.setState({Drinks: drinkArray, isDrinks: true})
    }
    
    showBreakfasts = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBreakfasts: false,
            isDesserts: false, isDrinks: false, isOthers: false})
        const breakfastArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Breakfast'})
            this.setState({Breakfasts: breakfastArray, isBreakfasts: true})
    }
    
    showOthers = () => {
        this.setState({isAppetizers: false, isEntreés: false, isBreakfasts: false,
            isDesserts: false, isDrinks: false, isOthers: false})
        const otherArray = this.props.recipes.filter(recipe => {
            return recipe.category == 'Other'})
            this.setState({Others: otherArray, isOthers: true})
    }
    
    render() {

        // const makeRecipeCard = (props) => {this.props.recipeObject.recipes.map(recipe => <RecipeCard {...recipe} />)}
        return(
            <>
                <Nav user={this.props.user} />
                <div className='recipeBook'>
                    <div className='buttonsContainer'>
                        <button onClick={this.showAppetizers} className='recipeButton'>Appetizers</button>
                        <button onClick={this.showEntrees} className='recipeButton'>Entreés</button>
                        <button onClick={this.showDesserts} className='recipeButton'>Dessert</button>
                        <button onClick={this.showBreakfasts} className='recipeButton'>Breakfast</button>
                        <button onClick={this.showDrinks} className='recipeButton'>Drinks</button>
                        <button onClick={this.showOthers} className='recipeButton'>Other</button>
                    </div> 
                {/* {this.makeRecipeCard()} */}
                <div className='recipeBody'> 
                    {this.state.isAppetizers ? this.state.Appetizers.map(recipe => <RecipeCard {...recipe}/>) : null}
                    {this.state.isEntreés ? this.state.Entreés.map(recipe => <RecipeCard {...recipe}/>): null}
                    {this.state.isDesserts ? this.state.Desserts.map(recipe => <RecipeCard {...recipe}/>) : null}
                    {this.state.isBreakfasts ? this.state.Breakfasts.map(recipe => <RecipeCard {...recipe}/>) : null}
                    {this.state.isDrinks ? this.state.Drinks.map(recipe => <RecipeCard {...recipe}/>) : null}
                    {this.state.isOthers ? this.state.Others.map(recipe => <RecipeCard {...recipe}/>) : null}
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