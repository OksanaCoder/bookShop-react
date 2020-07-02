import React, { Component } from 'react'
import {Row, Col, Container, Button } from 'react-bootstrap'
export default class SidebarRight extends Component {
    render() {
        return (

            <Col lg={2} md={2} className='right grey-bag'>
                <Container>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                  </ul>
                  <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                  </ul>
                  {/* <Button variant='warning'></Button> */}
                </Container>
            </Col>

        )
    }
}

