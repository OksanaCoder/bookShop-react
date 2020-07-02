import React, { Component } from 'react'
import { Col, Row, Container, Card } from 'react-bootstrap'

export default class Homepage extends Component {
   render() {
       return(
           <Col lg={8} md={8} className="black-main">
               <Container>
                   <Row>
                    <Col>
                      <Card>

                      </Card>
                    </Col>
                    
                   </Row>
                   
               </Container>
           </Col>
       )
   }
}