import React, { Component } from 'react'
import { Col, Row, Container, Card } from 'react-bootstrap'
import ReactStars from './ReactStars'
export default class Homepage extends Component {

    state={
        books : []
    }

    componentDidMount() {
            let res = fetch("https://google-books.p.rapidapi.com/volumes", {
                        "method": "GET",
                        "headers": {
                            "x-rapidapi-host": "google-books.p.rapidapi.com",
                            "x-rapidapi-key": "45ea72d0cbmsh5a68a7ddaa76fefp17c953jsn0a280e030350"
                        }
            })
           .then(res => res.json())
          .then(data => this.setState({ books: data.items }))
     
        }
   render() {
console.log(this.state.books)
       return(
           <>
           
       
           <Col lg={8} md={8} className="black-main">
               <Container>
                   <Row className='pt-5'>
                   {this.state.books.map(book => {
            return (
                 <Col lg={2} md={2} className='mb-4'>
                    <Card className='card-box'>
                        <Card.Img className='card-img' src={book.volumeInfo.imageLinks.thumbnail}></Card.Img>
                        <Card.Title className='font-card'>{book.volumeInfo.title.slice(0,15)}...</Card.Title>
                        {/* <p className='parag'>{book.volumeInfo.publisher}</p> */}
                        <ReactStars />
                    </Card> 
                        
                 </Col>
                
            )
        })}
                    
                   </Row>
                   
               </Container>
           </Col>
           </>
       )
   }
}