import React, { useEffect, useState } from 'react'
import { GetProfile } from '../Auth/Api';
import { useNavigate } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import './Sidebar.css'
import Button from 'react-bootstrap/Button';

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

    useEffect(() => {
        getProfile();
    }, [])
    return (
        <div className="sidebar_content">
            <div className="text-center mt-2 p-3">
                <Col>
                    <Image src="https://www.blogger.com/img/logo_blogger_40px.png" roundedCircle />
                </Col>
                {user.name}
                <div>
                    <Button href="/blog/create" variant="primary" className="mt-3">Add Post</Button>
                </div>
            </div>
            <hr />
            <ul>
                <li className="sidebar_element">
                    About
                </li>
                <li className="sidebar_element">
                    Pricing
                </li>
                <li className="sidebar_element">
                    Pages
                </li>
                <li className="sidebar_element">
                    Logout
                </li>
            </ul>
        </div>
    )
}

export default Sidebar