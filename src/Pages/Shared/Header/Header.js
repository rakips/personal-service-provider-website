import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../image/logo.png';
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);


    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <Navbar className='text-center' sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img className='site-logo mx-1' src={logo} alt="" />
                    <span >Rakip's Photography</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/reviews">Client Review</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

                    </Nav>
                    <Nav>

                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                        {
                            user ?
                                <Nav.Link onClick={handleSignOut} as={Link} to="/login">Log Out</Nav.Link>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;