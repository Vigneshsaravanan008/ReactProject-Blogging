import React, { useEffect, useState } from 'react'
import { GetProfile, GetBlog } from '../Auth/Api';
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAirFreshener } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';

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
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-8">
                    <div className="listing_bar">
                        <div className="p-3">
                            <Breadcrumb>
                                <Breadcrumb.Item href="#"> <FontAwesomeIcon icon={faHome} color="black" className="px-1" />Home</Breadcrumb.Item>
                                {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                    Library
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
                            </Breadcrumb>
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
                <div className="col-md-2">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home