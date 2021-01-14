import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import FormCrud from '../components/FormCrud';

class Slider extends Component {

  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBBtn className="btn-block" color={this.props.colorButton} onClick={this.toggle}>{this.props.nameButton}</MDBBtn>
        <MDBModal id="slider1" isOpen={this.state.modal} toggle={this.toggle} fullHeight position="right">
          <MDBModalHeader toggle={this.toggle}>{this.props.title}</MDBModalHeader>
          <MDBModalBody>
            <FormCrud {...this.props}/ >
          </MDBModalBody>
          <MDBModalFooter>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      );
    }
  }

  export default Slider;
