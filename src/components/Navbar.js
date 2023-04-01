import React ,{useState}from 'react'
import {Button,Container,Navbar,Modal } from 'react-bootstrap'
import { Cartcontext } from '../Cartcontext'
import { useContext } from 'react'

function Navbarcom() {
  const Cart=useContext(Cartcontext)
  const [show, setshow] = useState(false)
  const handleclose=()=>setshow(false)
  const handleShow=()=>setshow(true)
  return (
    <>
    <Navbar expand='sm' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="http://www.fruitbae.com/images/inside.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bite & Sip
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow} variant="light" size="sm">cart  items added</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{Cart.items.id}</p>
        </Modal.Body>
      </Modal>
      </>
  )
}

export default Navbarcom