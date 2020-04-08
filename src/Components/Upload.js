import React from 'react'
import axios from 'axios'
import '../Styling/AddToRecipeBook.css'
import {storage} from '../Firebase/index'

export default class Upload extends React.Component {
    
    state = {
        image: {},
        url: '',
        isUrl: false
    }

    fileSelectedHandler = (event) => {
        console.log(event)
        console.log(event.target.files[0])
        this.setState({
            image: event.target.files[0]
        })
    }

    // fileUploadHandler = () => {
    //     const fd = new FormData();
    //     fd.append('image', this.state.image, this.state.image.name)

    //     axios.post('', fd, {
    //         onUploadProgress: progressEvent => 
    //         console.log('Upload Progress', Math.round(progressEvent.loaded / progressEvent.total * 100) + '%') 
    //     })
    // }


    handleUpload = () => {
        const {image} = this.state
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
                   this.setState({url: url, isUrl: true})
                   this.props.addImage(this.state.url)
               })
            //    .then(this.props.addImage(this.state.url))
          }
        )
        
    }

    // handleImage = (event) => {
    //     event.preventDefault()
    //     this.props.addImage(this.state.url)
    // }

  


    
    
    render() {
        return(
            <div className="upload">
                <input id='imageUpload' type='file' name='image'
                     onChange={this.fileSelectedHandler}
                />
                <button id='imageUpload' onClick={this.handleUpload}>Upload Image </button>
                {/* <img src={this.state.url || 'http://via.placeholder.com/200x200'} alt='image' /> */}
            </div>

        )
    }
}