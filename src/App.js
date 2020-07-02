import React from 'react';
import logo from './logo.svg';
import './App.css';
import SidebarLeft from './Components/SidebarLeft'
import SidebarRight from './Components/SidebarRight'
import { Container, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar'


function App() {
  return (
    <>
      <NavBar />
      <Container fluid style={{padding: '0'}}>
      
        <Row>
          <SidebarLeft />
          <Homepage />
          <SidebarRight />
        </Row>
      </Container>
    </>
  );
}

export default App;
