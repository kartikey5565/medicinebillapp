import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge, Button } from 'react-bootstrap';
import CartContext from './Context/CartContext';
import { useContext } from 'react';
const Navigation = (props) => {
  const cartCtx = useContext(CartContext)
  return (
    <>
           <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Medicine Store 💊</Navbar.Brand>
          <Nav className="ms-auto">
            <Button onClick={props.onCart} variant={'warning'}>Cart <Badge>{cartCtx.items.length}</Badge> </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation