import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';





 function Signup(){
    return (
        <>
        <div className="d-flex">
                <Container className=" justify-content-between align-items-center">
                    <p className="mt-4" style={{ fontSize: '28px', color: 'white' }}>SERVICE CENTER</p>
                    <Navbar expand="lg" className="position-absolute top-0 end-0 text-white">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" >
                                <Nav className="me-auto">
                                    <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                                    <Nav.Link href="#home" className="text-white">About</Nav.Link>
                                    <Nav.Link href="#home" className="text-white">Contact</Nav.Link>
                                    <Nav.Link href="#link" className="text-white">Service</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </div>
            <div className="d-flex justify-content-center align-items-center  m-5">
    <div className="d-flex justify-content-center align-items-center custom-margin mt-5" style={{ maxWidth: '800px' }}>
                <Form className="p-4 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
                    <h3 className="text-center">SignUp</h3>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" className="bg-dark text-white" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" className="bg-dark text-white" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" className="bg-dark text-white" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" className="bg-dark text-white" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" className="bg-dark text-white" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter last name" className="bg-dark text-white" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group controlId="formBasicPassword" className="mt-3">
                        <Form.Label>location</Form.Label>
                        <Form.Control type="text" placeholder="Password" className="bg-dark text-white" />
                    </Form.Group>
                   
                    
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>Department</Form.Label> 
                    <div className="d-flex">  
                    <Form.Select aria-label="Default select example" className="bg-dark text-white">
                        <option>Select Deapartment</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </Form.Select>
                        <Button variant="outline-primary" style={{color:'white'}}>+</Button>
                        </div>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>Service</Form.Label>   
                    <div className="d-flex">  
                    <Form.Select aria-label="Default select example" className="bg-dark text-white">
                        <option>Select Service</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </Form.Select>
                        <Button variant="outline-primary" style={{color:'white'}}>+</Button>
                        </div>
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mt-3">
                        <Form.Label>Upload File</Form.Label>
                        <Form.Control type="file" className="bg-dark text-white" />
                        </Form.Group>
                       

                    <Button variant="primary" type="submit" className="mt-3">
                        SignUp
                    </Button>

                    
                </Form>
            </div>
            </div>
        </>
    );
 }
 export default Signup;