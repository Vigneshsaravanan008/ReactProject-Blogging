import React, { useEffect, useState } from 'react'
import { GetProfile } from '../Auth/Api';
import { useNavigate, Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import './Sidebar.css'
import Card from 'react-bootstrap/Card';

function Sidebar() {
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
            console.log(getResponse);
        }
    }

    const Logout = () => {
        localStorage.clear();
        alert();
        navigate('/login');
    }

    useEffect(() => {
        getProfile();
    }, [])
    return (
        <>
            <div className="sidebar_content">
                <div className="mt-2">
                    <div className="text-center">
                        <Col>
                            <Image src="https://www.blogger.com/img/logo_blogger_40px.png" roundedCircle />
                        </Col>
                        {user?.name}
                    </div>
                    <div className="d-flex justify-content-between px-3 mt-2">
                        <div>Following <p className="text-info text-center">35k</p></div>
                        <div>Followers <p className="text-info text-center">1M</p></div>
                    </div>
                    {/* <Button href="/blog/create" variant="primary" className="mt-3">Add Post</Button> */}
                </div>
            </div >
            <Card className="mt-3">
                <Card.Body>
                    <Card.Text className="text-info">Recent</Card.Text>
                    <ul>
                        <li>#React</li>
                        <li>#Next</li>
                        <li>#Python</li>
                    </ul>
                </Card.Body>
            </Card>
        </>
    )
}

export default Sidebar