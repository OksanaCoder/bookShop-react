import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstraps'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ModalReg extends Component {
    render() {
        return (

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
        )
    }
}