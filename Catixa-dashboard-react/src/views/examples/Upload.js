import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import {
  Progress, CardHeader, CardBody, Row, Col, Container, Button
} from "reactstrap";
import UserHeader from "components/Headers/UserHeader"
import Lightbox from 'react-images';


var cont;

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

    setTimeout(() => {
      firebase
        .database()
        .ref('Image/')
        .once('value')
        .then(snapshot => {
          console.log(snapshot.val())
          cont = snapshot.numChildren();
          console.log(cont)
        });
    }, 200);

    this.setState({
      image: filename,
      progress: 100
    })

    //Sube
    firebase.storage().ref('images').child(filename).getDownloadURL()
      .then(url => this.setState({
        imageURL: url
      }))

    firebase.storage().ref('images').child(filename).getDownloadURL()
      .then(url => firebase.database().ref('Image/' + (parseInt(cont) + 1)).set(
        {
          rate: filename,
          url: url
        }
      ).then(() => {
        console.log('INSERTED !');
      }).catch((error) => {
        console.log(error);
      })
      )

  }

  render() {
    console.log(this.state);
    //Lo que está dentró del FileUpdater es lo que hace que se pueda subir la imagen,
    //Es el botoncito que dice seleccione archivo
    return (
      <>
        <UserHeader />
        <Container className="mt--9" fluid>
          <Row >
            <Col className="mb-5 mb-xl-0 center" xl="9">
              <div className="text-center">
                <label style={{ backgroundColor: '#5E72E4', color: 'white', padding: 7, borderRadius: 4, cursor: 'pointer' }}>
                  <i class="ni ni-cloud-upload-96"></i>
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
            </Col>
            <Col className="mb-5 mb-xl-0 center" xl="9">
              <CardHeader className="bg-transparent">

                <div className="text-center" style={{ padding: 7 }}>Progreso: {this.state.progress} % </div>

                <Progress value={this.state.progress} />
              </CardHeader>
              <CardBody style={{ textAlign: "center" }}>


                <b-carousel id="carousel1" controls indicators>
                  <b-carousel-slide id="carousel1" controls indicators>
                    {this.state.image && <img src={this.state.imageURL} height="400" width="400" content-align="center" />}
                  </b-carousel-slide>
                </b-carousel>

                <Lightbox
                  images={[{ src: 'http://example.com/img1.jpg' }, { src: 'http://example.com/img2.jpg' }]}
                  isOpen={this.state.lightboxIsOpen}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  onClose={this.closeLightbox}
                />

              </CardBody>
            </Col>
          </Row>
          <div className="text-center">
            <Button className="my-4" color="primary" type="button"
              onClick={
                e => e.preventDefault()
              }>
              Ver Todas
                  </Button>


          </div>
        </Container>

      </>
    );
  }
}

export default ProfilePage;