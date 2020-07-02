import React, { Component } from 'react'
import { Navbar, FormControl, Button, Form, Nav, Container, Row, Col, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSignInAlt, faUserAlt, faBell, faCog } from "@fortawesome/free-solid-svg-icons";
import ModalLog from './ModalLog'
// import ModalReg from './Components/ModalReg'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      log: false
      
    }
    this.showModal = this.showModal.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  showModal() {
    this.setState({ show: true })
  }
   showModalLog() {
     this.setState({ log: true })
   }
  handleClose() {
    this.setState({ show: false })
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

              <FontAwesomeIcon className='col-grey mr-3' icon={faBell} />


              <FontAwesomeIcon className='col-grey' icon={faCog} />

            </div>
          </Col>

          <Col lg={2} md={2} className='prof-nav'>
            <div className='mr-3'>
              <FontAwesomeIcon icon={faUserAlt} />
              <a className='log' onClick={this.showModal}>
                Register</a>
            </div>
            <div>
              <FontAwesomeIcon icon={faSignInAlt} />
              <a className='log' onClick={ ()=> this.showModalLog()}>

                Log in</a >
            </div>
          </Col>
        </Row>
       <ModalLog show={this.state.log} onHide={() => this.setState({ log: false})}/>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>

          </Modal.Header>

          <form className="text-center border border-light p-5" action="#!">

            <p className="h4 mb-4">Sign up</p>

            <div className="form-row mb-4">
              <div className="col">

                <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name" />
              </div>
              <div className="col">

                <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name" />
              </div>
            </div>

            <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail" />


            <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
            <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
              At least 8 characters and 1 digit
</small>


            <input type="text" id="defaultRegisterPhonePassword" className="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" />
            <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
              Optional - for two step authentication
</small>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="defaultRegisterFormNewsletter" />
              <label className="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
            </div>


            <Button varian='' className=" my-4" style={{ width: '100%' }} type="submit">Sign in</Button>


            <p>or sign up with:</p>

            <a href="#" className="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
            <a href="#" className="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
            <a href="#" className="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
            <a href="#" className="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>



            <p>By clicking
                      <em>Sign up</em> you agree to our
                      <a href="" target="_blank">terms of service</a>
            </p>
          </form>




        </Modal>

      </Container>



    )
  }
}