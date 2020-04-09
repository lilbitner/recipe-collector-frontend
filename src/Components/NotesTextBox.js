import React from 'react'


export default class TextBox extends React.Component {
    
    
    
    
    render() {
        return(
            <>
            <textarea className='textArea' name='input1' />
            <button className='saveButton'>Save</button>
            </>
        )
    }
}