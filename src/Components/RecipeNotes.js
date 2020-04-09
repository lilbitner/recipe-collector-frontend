import React from 'react'
import Nav from './Nav'
import '../Styling/RecipeNotes.css'
import TextBox from './NotesTextBox'

export default class RecipeNotes extends React.Component {
    
    
    state = {
        addTextBox: false
    }
    
    
    
    handleAddition = () => {
        this.setState({addTextBox: true})
    }
    
    
    render() {
        return(
            <div className='notes'> 
            <Nav user={this.props.user}/>
            <body className='notesBody'>

                <h4>Notes</h4>
                <div class="lines"></div>
                <ul id="List">
                    <textarea className='textArea' name='input1' />
                    <button className='saveButton'>Save</button>
                    <button onClick={this.handleAddition}>Add another Note Box</button>
                    {this.state.addTextBox ? <TextBox /> : null}
                    {/* <textarea className='textArea' name='input2' />
                    <button className='saveButton'>Save</button>
                    <textarea className='textArea' name='input3' />
                    <button className='saveButton'>Save</button>
                    <textarea className='textArea' name='input4' />
                    <button className='saveButton'>Save</button>
                    <textarea className='textArea' name='input5' />
                    <button className='saveButton'>Save</button>
                    <textarea className='textArea' name='input6' />
                    <button className='saveButton'>Save</button>
                    <textarea className='textArea' name='input7' />
                    <button className='saveButton'>Save</button>
                    <textarea className='textArea' name='input8' />
                    <button className='saveButton'>Save</button>
                    <textarea className='textArea' name='input9' />
                    <button className='saveButton'>Save</button>
                    <textarea className='textArea' name='input10' />
                    <button className='saveButton'>Save</button>
                    <textarea className='textArea' name='input11' />
                    <button className='saveButton'>Save</button>
                    <textarea className='textArea' name='input12' />
                    <button className='saveButton'>Save</button> */}
                </ul>

            </body>
            </div>
        )
    }
}