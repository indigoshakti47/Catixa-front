import React, { Component } from 'react';

import Modal from '../../components/Modal/Modal';

class App extends Component {
    state = {
       modal: false
    }
     
    selectModal = (info) => {
      this.setState({modal: !this.state.modal}) // true/false toggle
    }
    
    render() {
       return (
          <div className="App">
              
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
             <p onClick={ this.selectModal }
             >Open Modal</p>      
             <Modal 
                 displayModal={this.state.modal}
                 closeModal={this.selectModal}
             />
          </div>
       );
}}
export default App;