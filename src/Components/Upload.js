import React from 'react'
import axios from 'axios'
import '../Styling/AddToRecipeBook.css'

export default class Upload extends React.Component {
    
    state = {
        image: ''
    }

    fileSelectedHandler = (event) => {
        console.log(event)
        console.log(event.target.files[0])
        this.setState({image: event.target.files[0]})
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.image, this.state.image.name)

        axios.post('', fd, {
            onUploadProgress: progressEvent => 
            console.log('Upload Progress', Math.round(progressEvent.loaded / progressEvent.total * 100) + '%') 
        })
    }

    
    // onChange = (event) => {
    //     const files = event.target.files
    //     const reader = new FileReader();
    //     reader.readAsDataURL(files[0]);
    //     reader.onload=(event) => {
    //         const url = "recipe post URL"
    //         const formData={file: event.target.result}
    //         return post(url, formData)
    //         .then(response => console.log("result", response))
    //     }

    // }
    
    render() {
        return(
            <div className="upload">
                <input id='imageUpload' style={{display: 'none'}} type='file' name='image'
                    onChange={this.onChange} ref={fileInput => this.fileInput = fileInput}
                />
                <button id='pickFile' onClick={() => this.fileInput.click()}>Pick File</button>
                <button id='imageUpload' onClick={this.fileUploadHandler}>Upload Image </button>
            </div>
        )
    }
}