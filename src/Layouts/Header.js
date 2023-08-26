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
import { FiHome, FiMessageCircle, FiUsers, FiBell } from "react-icons/fi";

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
                    <Navbar.Brand href={user ? "/" : "/login"}>Blogging</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                {/* <Button variant="outline-success">Search</Button> */}
                            </Form>
                        </Nav>

                        <Nav className="d-flex px-3">
                            <Nav.Item className="px-3">
                                <Nav.Link eventKey="1" className="fs-15" href="/">
                                    <div className="text-center">
                                        <FiHome />
                                    </div>
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="px-3">
                                <Nav.Link eventKey="1" className="fs-15" href="/messaging/thread/new">
                                    <div className="text-center"> <FiMessageCircle /></div>
                                    Messaging
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="px-3">
                                <Nav.Link eventKey="1" className="fs-15" href="/player">
                                    <div className="text-center"><FiUsers /></div>
                                    Music Player
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="px-3">
                                <Nav.Link eventKey="1" className="fs-15" href="#/home">
                                    <div className="text-center"> <FiBell /></div>
                                    Notification
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-3 mt-3">
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
                            </Nav.Item>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header