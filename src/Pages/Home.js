import React, { useEffect, useState } from 'react'
import { GetProfile } from '../Auth/Api';
import { useNavigate } from "react-router-dom";

function Home() {
    var [token] = useState('');
    var [user, setUser] = useState('');

    let navigate = useNavigate();

    const getProfile = async () => {
        token = localStorage.getItem('token');
        var getResponse = await GetProfile(token);
        if (getResponse.status == 403) {
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
        <div className="d-flex ml-3">
            <div className="p-5">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                {/* <div>Hello {user?.name}</div> */}
            </div>
            <div class="vl"></div>
            <div class="justify-content- mt-3 px-3">Hello left</div>
        </div>

    )
}

export default Home