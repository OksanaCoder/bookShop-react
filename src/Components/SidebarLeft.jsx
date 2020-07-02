import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faDragon, faBookDead, faCoffee, faMapPin, faRetweet, faCalendarAlt, faHistory, faReceipt, faBookmark, faHeart, faMonument, faAtom, faHeartBroken} from "@fortawesome/free-solid-svg-icons";

export default class SidebarLeft extends Component {
    render() {
        return (

            <Col lg={2} md={2} className='left grey-bag' style={{ height: '100vh', fontSize: '14px', lineHeight: '2' }} >
                <Container className='wrap-left' >
                    <Row>
                        <Col lg={12} className='pt-4 pb-3'> 
                            <small>Main</small>
                            <ul  className='mt-2'>
                                <li><a href='/' ><FontAwesomeIcon icon={faBook} className='relat-awes' />Catalog</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faMapPin} className='relat-awes' />Top Books</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faRetweet} className='relat-awes' />New Releses</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faCalendarAlt} className='relat-awes' />Coming soon</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faCoffee} className='relat-awes' />Recommendations</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faReceipt} className='relat-awes' />Reading</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faHistory} className='relat-awes' />History</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faBookmark} className='relat-awes' />Read later</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faHeart} className='relat-awes' />Likes</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                      <Col lg={12} className='pt-4 pb-3'> 

                            <small>Genres</small>
                            <ul  className='mt-2'>
                                <li><a href='/'><FontAwesomeIcon icon={faMonument} className='relat-awes' />History</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faDragon} className='relat-awes' />Fantasy</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faAtom} className='relat-awes' />Sci-fi</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faBookDead} className='relat-awes' />Horror</a></li>
                                <li><a href='/'><FontAwesomeIcon icon={faHeartBroken} className='relat-awes' />Romance</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} className='text-center pt-2'>
                            <Button variant='warning' style={{width: '100%'}}>Profile</Button>
                        </Col>
                    </Row>
                </Container>
            </Col>

        )
    }
}

