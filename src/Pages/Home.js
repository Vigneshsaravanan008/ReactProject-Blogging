import React, { useEffect, useState } from 'react'
import { GetProfile, GetBlog } from '../Auth/Api';
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import './Home.css';
import { FiCamera, FiFileMinus, FiVideo } from "react-icons/fi";

function Home() {
    var [token] = useState('');
    var [user, setUser] = useState('');
    var [list, setList] = useState('');

    let navigate = useNavigate();

    const getProfile = async () => {
        token = localStorage.getItem('token');
        if (token == null) {
            navigate('/login');
        }
        var getResponse = await GetProfile(token);
        if (getResponse.status === 403) {
            navigate('/login');
        } else {
            setUser(getResponse.user);
        }
    }

    const getBlogList = async () => {
        token = localStorage.getItem('token');
        var getResponse = await GetBlog(token);
        setList(getResponse.blogs);
    }

    useEffect(() => {
        getProfile();
        getBlogList();
    }, [])
    return (
        <div className="container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <Sidebar />
                    </div>
                    <div className="col-lg-7">
                        <Card className="mx-5 mt-3">
                            <Card.Body className="d-flex justify-content-between align-items-center post_line">
                                <Col>
                                    <Image src="https://www.blogger.com/img/logo_blogger_40px.png" roundedCircle />
                                </Col>
                                <InputGroup className="px-3">
                                    <Form.Control
                                        className="post_input"
                                        placeholder="Add a Post"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Card.Body>
                            <Card.Body className="d-flex justify-content-between align-items-center">
                                <span><FiCamera className="m-2" />photo</span>
                                <span><FiVideo className="m-2" />Video</span>
                                <span><FiFileMinus className="m-2" />Blog</span>
                                <span><FiFileMinus className="m-2" />Article</span>
                            </Card.Body>
                        </Card>
                        <hr className="m-4" />
                        <div className="listing_bar m-3">
                            <div className="p-3">
                                <div className="py-3">
                                    {list && list.map((tag, index) => (
                                        <Card key={index} className="m-2">
                                            <Card.Body className="d-flex justify-content-between align-items-center">
                                                {tag?.title}
                                                <div className="justify-content-right">
                                                    <Button href={`/blog/edit/${tag?.id}`} className="m-2">
                                                        Edit
                                                    </Button>
                                                    <Button href={`/blog/edit/${tag?.id}`} className="m-2">
                                                        Delete
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home