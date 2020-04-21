import React from 'react'
import Nav from './Nav'
import Upload from './Upload'
import '../Styling/AddToRecipeBook.css'

export default class AddToRecipeBook extends React.Component {
    
    state= {
        title: '',
        category: '',
        description: '',
        image: '',
        url: '',
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
        this.props.componentDidMount()
    }



    
    render() {
        return(
            <>
            <Nav user={this.props.user} />
            <h1 id='add'>AddToRecipeBook</h1>
            <div className='allUploadInputs'> 
                <h3 id='pickWhatYouWant'> Pick and choose what you would like to add</h3>
                <Upload addImage={this.addImage} />
                <form  className='uploadForm' onSubmit={this.handleSubmit}> 
                    <input onChange={this.handleChange} id='recipeInput' type='text' name='title' placeholder='Recipe Name' />
                    <textarea onChange={this.handleChange} id='recipeDescription' rows='6' cols='10' wrap='soft' name='description'
                        placeholder='short recipe description'>
                    </textarea>
                    <select onChange={this.handleChange} id='recipeCategory' type='text' name='category' > 
                        <option value='' disabled selected hidden>Select a Recipe Category</option>
                        <option value='Appetizer'>Appetizer</option>
                        <option value='Entreé'>Entreé</option>
                        <option value='Dessert'>Dessert</option>
                        <option value='Sides'>Side</option>
                        <option value='Salads'>Salad</option>
                        <option value='Holiday'>Holiday</option>
                        <option value='Beverage'>Beverage</option>
                        <option value='Brunch'>Brunch</option>
                        <option value='Miscellaneous'>Miscellaneous</option>
                    </select>
                    <input onChange={this.handleChange} id='recipeUrl'  name='url' placeholder='External Recipe Url'/>
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