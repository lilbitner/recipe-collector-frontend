import React from 'react'
import {Link, NavLink, Redirect, Route, Switch} from 'react-router-dom'
import Nav from './Nav'
import '../Styling/Home.css'
import RecipeBook from './RecipeBook'
import AddToRecipeBook from './AddToRecipeBook'
import RecipeNotes from './RecipeNotes'

export default class Home extends React.Component{
    
    state = {
        image1: "https://images.unsplash.com/photo-1547516508-4c1f9c7c4ec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1959&q=80",
        image2: 'https://images.unsplash.com/photo-1495546968767-f0573cca821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
        image3: 'https://images.unsplash.com/photo-1516824711718-9c1e683412ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    }

    
    render() {
        return(
            <>
            <Nav user={this.props.user} />
            <div className='buttonContainer'> 
                <button onClick={() => this.props.history.push('/add')} 
                    id='uploadButton'>Add to your RecipeBook
                </button>
                <button onClick={() => this.props.history.push('/book')} 
                    id='viewButton'>View your RecipeBook
                </button>
                <button onClick={() => this.props.history.push('/notes')}
                     id='notesButton'>Conversion Helper
                </button>
            </div>
            <div className='imageContainer'> 
                <img id='uploadImage' src={this.state.image1} /> 
                <img id='viewImage' src={this.state.image2}/>
                <img id='notesImage' src={this.state.image3} />
            </div>
            </>
        )
    }
}