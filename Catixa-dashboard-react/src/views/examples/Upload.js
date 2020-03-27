import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class ProfilePage extends Component {

  state = {
    image: '',
    imageURL: '',
    progress: 0
  };

  handleUploadStart = () => {
    this.setState({
      progress: 0
    })
  }

  //Qué hace cuando termine de subir
  handleUploadSuccess = filename => {

    this.setState({
      image: filename,
      progress: 100
    })

    //Sube
    firebase.storage().ref('images').child(filename).getDownloadURL()
      .then(url => this.setState({
        imageURL: url
      }))

  }

  render() {
    console.log(this.state);
    //Lo que está dentró del FileUpdater es lo que hace que se pueda subir la imagen,
    //Es el botoncito que dice seleccione archivo
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label>Progreso:</label>
        <p>{this.state.progress}</p>
        <br></br>
        <br></br>
        <br></br>
        <label>Imagen rescatada:      </label>
        <br></br>
        {this.state.image && <img src={this.state.imageURL} />}
        <label style={{ backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer' }}>
          Selecciona imagen
          <FileUploader
          hidden
            accept="images/*"
            name='image'
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadSuccess={this.handleUploadSuccess}
          />

        </label>
      </div>
    );
  }
}

export default ProfilePage;