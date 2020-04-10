import React from 'react'
import axios from 'axios'
import '../Styling/AddToRecipeBook.css'
import {storage} from '../Firebase/index'

export default class Upload extends React.Component {
    
    state = {
        image: {},
        url: '',
        isUrl: false,
        isLoaded: true
    }

    fileSelectedHandler = (event) => {
        console.log(event)
        console.log(event.target.files[0])
        this.setState({
            image: event.target.files[0]
        })
    }


    handleUpload = () => {
        const {image} = this.state
        this.setState({isLoaded: false})
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
           "state_changed",
           snapshot => {},
           error => {
               console.log(error);
           },
           () => {
               storage
               .ref("images")
               .child(image.name)
               .getDownloadURL()
               .then(url => {
                   this.setState({url: url, isUrl: true, isLoaded: true})
                   this.props.addImage(this.state.url)
               })
          }
        )
        
    }

    
    render() {
        return(
            <>
            <div className="upload">
                <input id='pickFile' type='file' name='image'
                     onChange={this.fileSelectedHandler}
                />
                <button id='imageUpload' onClick={this.handleUpload}>Upload Image </button>
            </div>
            {!this.state.isLoaded ? <img id='loadingImage' src='https://cdn.lowgif.com/small/d35d94c490e598e3-loading-gif-transparent-loading-gif.gif' alt='File is Loading!' /> : null}
            {this.state.isUrl ? <h3 id='recipeSubmittedMessage'>Image Uploaded!</h3> : null}
            </>

        )
    }
}