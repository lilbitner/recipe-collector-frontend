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

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.props.closeForm){ 
        this.props.closeForm(false)}
        this.props.login(this.state)
            // .then(() => this.props.history.push('/'))
    }

    handleChange = (event) => {
        const {name, value} = event.target 
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return(
            <>
            <Nav />
            <h1>AddToRecipeBook</h1>
            <form className='uploadForm' onSubmit={this.handleSubmit}> 
            <Upload />
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
                <input id='recipeSubmit' type='submit' />
            </form>
            </>
        )
    }
}