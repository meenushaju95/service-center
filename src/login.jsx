import React, { useRef } from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const [username, setUsername] = useState('');
     const passref = useRef(null);
    const navigate = useNavigate();

    const checklogin = () => {
        console.log(username , passref.current.value)
        if (username && passref.current.value) {
          let data = {
            password: passref.current.value,
            username: username
          };
          
          const headers = {
            "content-type": "application/json"
          };
          axios.post('http://127.0.0.1:8000/login', data, headers)
        .then((res) => {
          
          console.log(res.data);
          if (res.data.status === 'success'){
          if (res.data.role === 'admin') {
            navigate('/AdminDashboard'); 
          } else {
            navigate('/userhome'); 
          }
        }else{
            alert(res.data.error)
        }

        })
        .catch((err) => {
          console.log(err);
          
        });
    } else {
      alert('Enter username and password');
    }
  };
    return (
        <>
            <div className="d-flex">
                <Container className="justify-content-between align-items-center">
                    <p className="mt-4" style={{ fontSize: '28px', color: 'white' }}>SERVICE CENTER</p>
                    <Navbar expand="lg" className="position-absolute top-0 end-0 text-white">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
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
            <div className="d-flex justify-content-center align-items-center custom-margin" style={{ height: '80vh' }}>
                <Form className="p-4 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }} >
                    <h3 className="text-center">Login</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)} className="bg-dark text-white" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={passref} className="bg-dark text-white" />
                    </Form.Group>

                    <Button variant="primary" onClick={checklogin} type="button" className="mt-3">
                        Login
                    </Button>
                    <div className="d-flex align-items-center mt-3">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link to="/signup" className="text-primary" style={{ textDecoration: 'none' }}>Create</Link>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default Profile;