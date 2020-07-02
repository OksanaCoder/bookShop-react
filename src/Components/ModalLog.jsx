import React , {Component} from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ModalLog extends Component {
    render() {
        return( 

            <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>

          </Modal.Header>

          <form className="text-center border border-light p-5" action="#!">

            <p className="h4 mb-4">Log in</p>


            <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />


            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />

            <div className="d-flex justify-content-around">
              <div>

                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                  <label className="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                </div>
              </div>
              <div>

                <a href="">Forgot password?</a>
              </div>
            </div>


            <Button variant='warning' className=" my-4" style={{width: '100%'}} type="submit">Sign in</Button>


            <p>Not a member?
                   <a href="" className='ml-2'>Register</a>
            </p>


            <p>or sign in with:</p>

            <a href="#" className="mx-2" role="button"><FontAwesomeIcon icon={"facebook-square"}/></a>
            <a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"></i></a>
            <a href="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></a>
            <a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"></i></a>

          </form>



        </Modal>
        )
    }
}