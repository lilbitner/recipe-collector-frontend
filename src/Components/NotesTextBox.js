import React from 'react'


export default class TextBox extends React.Component {
    

    render() {
        return(
            <>
            <input placeholder='Notes Title' name='title' />
            <textarea className='textArea' name='input1' />
            <button className='saveButton'>Save</button>
            <button onClick={this.props.handleAddition}>Add another Note Box</button>
            </>
        )
    }
}