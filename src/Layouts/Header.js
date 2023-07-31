import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { GetProfile } from '../Auth/Api';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Header() {
    var [token] = useState('');
    var [user, setUser] = useState('');
    let navigate = useNavigate();

    const getProfile = async () => {
        token = localStorage.getItem('token');
        var getResponse = await GetProfile(token);
        if (getResponse.status === 403) {
            navigate('/login');
        } else {
            setUser(getResponse.user);
        }
    }

    useEffect(() => {
        getProfile();
    }, [])
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark" expand="md" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href={user ? "/home" : "/"}>Blogging</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                        <Nav className="d-flex px-3">
                            {
                                user != null ?
                                    <Col>
                                        <Link to="/profile">
                                            <Image src="https://www.blogger.com/img/logo_blogger_40px.png" roundedCircle />
                                        </Link>
                                    </Col>
                                    :
                                    <Button href="/login">Login</Button>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header