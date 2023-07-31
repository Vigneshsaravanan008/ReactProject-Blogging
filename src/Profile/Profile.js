import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './Profile.css';
import { useEffect, useState } from 'react';
import { GetProfile } from '../Auth/Api';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function Profile() {

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
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-9">
                    <Card className="profile-bg">
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg?w=1000" width="100%" height="200px" style={{ left: "0px", top: "0px" }} />
                        <Card.Body>
                            <Card.Title>
                                <div className="image_profile">
                                    <Image src="https://www.blogger.com/img/logo_blogger_40px.png" height="110px" roundedCircle />
                                </div>
                                <div className="mr-3 mt-3">
                                    {user.name}
                                    <div className="font-gray fs-16">
                                        Blogger
                                    </div>
                                    <div>
                                        <span className="fs-14">
                                            Bangalore,Karnataka
                                            <Link className="px-3">
                                                Contact Info
                                            </Link>
                                        </span>
                                    </div>
                                </div>

                            </Card.Title>
                            <Card.Text className="">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Carousel data-bs-theme="dark">
                                <Carousel.Item>
                                    <Card>
                                        <Card.Body>This is some text within a card body.</Card.Body>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card>
                                        <Card.Body>This is some text within a card body.</Card.Body>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card>
                                        <Card.Body>This is some text within a card body.</Card.Body>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card>
                                        <Card.Body>This is some text within a card body.</Card.Body>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card>
                                        <Card.Body>This is some text within a card body.</Card.Body>
                                    </Card>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card border="profile-bg p-3">
                        <h5 className="">
                            Profile Language
                        </h5>
                        <hr className="profile-hr" />
                        <div className="">
                            <h5>Share Profile</h5>
                            <div>
                                www.linkedin.com/in/vignesh-saravanan-9839481a4
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Profile