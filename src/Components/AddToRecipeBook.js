import React from 'react'
import Nav from './Nav'
import Upload from './Upload'
import '../Styling/AddToRecipeBook.css'

export default class AddToRecipeBook extends React.Component {
    
    state= {
        title: '',
        category: '',
        image: '',
        user_id: `${localStorage.user_id}`
    }

    addImage = (url) => {
        console.log(url)
        this.setState({image: url})
    }

    handleChange = (event) => {
        const {name, value} = event.target 
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
        if(this.props.closeForm){ 
        this.props.closeForm(false)}
        this.props.addRecipe(this.state)
    }

    handleRefresh = () => {
        return window.location.href = window.location.href
    }



    
    render() {
        return(
            <>
            <Nav user={this.props.user} />
            <h1>AddToRecipeBook</h1>
            {/* <form  className='uploadForm' onSubmit={this.handleSubmit}>  */}
            <div className='allUploadInputs'> 
            <Upload addImage={this.addImage} />
            <form  className='uploadForm' onSubmit={this.handleSubmit}> 
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
            {this.props.isRecipeCreated ? 
            <>
            <h3 id='recipeSubmittedMessage'>Recipe Submitted!</h3>
            <button id='refreshButton' onClick={this.handleRefresh}>Submit another Recipe</button>
            </>
             : null}
             </div>
            </>
        )
    }
}