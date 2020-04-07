import React from 'react'
import Nav from './Nav'
import Upload from './Upload'
import '../Styling/AddToRecipeBook.css'

export default class AddToRecipeBook extends React.Component {
    
    state= {
        title: '',
        category: '',
        image: {},
        user_id: `${localStorage.user_id}`
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.props.closeForm){ 
        this.props.closeForm(false)}
        this.props.addRecipe(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target 
        this.setState({
            [name]: value
        })
    }

    addImage = (newImage) => {
        this.setState({image: newImage})
    }
    
    render() {
        return(
            <>
            <Nav user={this.props.user} />
            <h1>AddToRecipeBook</h1>
            <form className='uploadForm' onSubmit={this.handleSubmit}> 
            <Upload addImage={this.addImage} />
                <input onChange={this.handleChange} id='recipeInput' type='text' name='title' placeholder='Recipe Name' />
                <select onChange={this.handleChange} id='recipeCategory' type='text' name='category' > 
                    <option value='' disabled selected hidden>Select a Recipe Category</option>
                    <option value='Appetizer'>Appetizer</option>
                    <option value='Entreé'>Entreé</option>
                    <option value='Dessert'>Dessert</option>
                    <option value='Drink'>Drink</option>
                    <option value='Breakfast'>Breakfast</option>
                    <option value='Other'>Other</option>
                </select>
                <input id='recipeSubmit' type='submit' />
            </form>
            </>
        )
    }
}