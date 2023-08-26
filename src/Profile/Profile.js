import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './Profile.css';
import { useEffect, useState } from 'react';
import { GetProfile } from '../Auth/Api';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FiHome, FiFile } from "react-icons/fi";
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
                            {/* <Carousel data-bs-theme="dark">
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
                            </Carousel> */}
                            <OwlCarousel items={3}
                                className="owl-theme"
                                loop
                                margin={8} >
                                <div> <Card>
                                    <Card.Body>Add your Favourites.</Card.Body>
                                </Card></div>
                                <div> <Card>
                                    <Card.Body>View your Posts Comments</Card.Body>
                                </Card></div>
                                <div> <Card>
                                    <Card.Body>Saved Posts</Card.Body>
                                </Card></div>
                            </OwlCarousel>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <ul className="footer_text mt-3 fs-12">
                        <li className="footer_link">About</li>
                        <li className="footer_link">Accessibility</li>
                        <li className="footer_link">Privacy & Terms</li>
                        <li className="footer_link">Ad Choices</li>
                        <li className="footer_link">Advertising</li>
                    </ul>
                    <p className="text-center text-primary mt-2 fs-12">Blogging © 2023 Corporation © 2023</p>
                </div>
            </div>
            <div className="card_gap">
                <div className='row col-md-9'>
                    <div className="col-md-3">
                        <Card className="profile-bg">
                            <Card.Title className='p-2'>
                                Analytics
                            </Card.Title>
                            <div className="">
                                <ul>
                                    <li className="p-2 border-bt-line">
                                        <FiHome /> Overview
                                    </li>
                                    <li className="p-2">
                                        Education
                                    </li>
                                    <li className="p-2">
                                        Friends
                                    </li>
                                    <li className="p-2">
                                        Settings
                                    </li>
                                    <li className="p-2">
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-9">
                        <Card className="profile-bg">
                            <Card.Title className='p-2'>
                                Overview
                            </Card.Title>
                            <div>
                                <ul>
                                    <li className="p-3">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title><FiFile /> Posts</Card.Title>
                                                <h6>100</h6>
                                                </Card.Body>
                                        </Card>

                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile