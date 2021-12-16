import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        const styles={
            navbar:{
                marginBottom:"20px"
            }
        }
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg" style={styles.navbar}>
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">Social</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        {this.props.token ?
                        <>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/post">Post</Nav.Link>
                                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>

                            </Nav>
                        </>
                        :
                            <Nav>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </Nav>
                        }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}