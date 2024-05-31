import React from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';







function Home() {
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
            <Container className="d-flex justify-content-center align-items-center" style={{ padding: '100px' }}>
    <div className="text-center">
        <p className="text-white">
            Welcome to our Service Center! We are dedicated to providing top-notch services to meet all your needs. Our expert technicians are trained to handle a wide range of issues, from routine maintenance to complex repairs. Whether it's automotive, electronic, or home appliance services you require, you can trust us to deliver efficient solutions with the highest level of professionalism. Customer satisfaction is our priority, and we strive to exceed your expectations every time. Experience peace of mind knowing that your valuable assets are in capable hands. Visit us today and let us take care of all your service needs!
        </p>
       
    </div>
</Container>
<div className="text-center mt-3">
   
<Link to='/login' className="btn btn-primary" style={{ textDecoration: 'none', color: 'inherit' }}>Get Started</Link>

</div>
        </>
    );
}

export default Home;