import React from 'react'
import Nav from './Nav'
import Upload from './Upload'
import '../Styling/AddToRecipeBook.css'

export default class AddToRecipeBook extends React.Component {
    
    state= {
        title: '',
        category: '',
        image: ''
    }
    
    
    render() {
        return(
            <>
            <Nav />
            <h1>AddToRecipeBook</h1>
            <form className='uploadForm'> 
                <input id='recipeInput' type='text' name='title' placeholder='Recipe Name' />
                <select id='recipeCategory' type='text' name='title' > 
                    <option value='' disabled selected hidden>Select a Recipe Category</option>
                    <option value='Appetizer'>Appetizer</option>
                    <option value='Entreé'>Entreé</option>
                    <option value='Dessert'>Dessert</option>
                    <option value='Drink'>Drink</option>
                    <option value='Breakfast'>Breakfast</option>
                    <option value='Other'>Other</option>
                </select>
                <Upload />
                <input id='recipeSubmit' type='submit' />
            </form>
            </>
        )
    }
}