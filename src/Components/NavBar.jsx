import React, { Component } from 'react'
import { Navbar, FormControl, Button, Form, Nav, Container, Row, Col, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSignInAlt, faUserAlt, faBell, faCog } from "@fortawesome/free-solid-svg-icons";


export default class NavBar extends Component {
  state = {
    show: false
  }
  handleShow() {
    this.setState({ show: true })
  }
  handleClose() {
    this.setState({ show: false})
  }
  render() {
    return (

      <Container fluid style={{ padding: '0' }}>
        <Row className='flex-nav'>
          <Col lg={2} md={2} className="logo-bag text-center p-2" >
            <a href='/' style={{ fontSize: '25px', color: 'white', fontStyle: 'italic' }}>BookStore</a>
          </Col>
          <Col lg={8} md={8} style={{ padding: '15px', paddingLeft: '50px' }} className='top-flex'>
            <div className="input-group" >

              <FontAwesomeIcon icon={faSearch} className='inner-icon' />
              <input className="form-control" type="text" placeholder="Search..." className='searching' />

            </div>
            <div className='fonts-col pr-4'>
            
                <FontAwesomeIcon className='col-grey mr-3' icon={faBell}/>
        
            
                <FontAwesomeIcon className='col-grey' icon={faCog}/>
           
            </div>
          </Col>

          <Col lg={2} md={2} className='prof-nav'>
            <div className='mr-3'>
              <FontAwesomeIcon icon={faUserAlt} />
              <a className='log'>
                Register</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faSignInAlt} />
              <a className='log' onClick={this.handleShow}>

                Log in</a >
            </div>
          </Col>
        </Row>
        <Modal show={this.state.show} onClick={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
      


    )
  }
}