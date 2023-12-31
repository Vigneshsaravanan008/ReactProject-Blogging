import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { GetProfile, LoginApi, GoogleLoginApi } from './Api';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script";
import google from '../Image/google.webp';

function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState("");
    const clientId = '152246703103-vcjsdt053c1q2i7cjr6p93i379oe31hd.apps.googleusercontent.com';

    const onSuccess = async (res) => {
        let profile = res.profileObj;
        const formData = new FormData();
        formData.append('request_data', JSON.stringify(profile));
        const getLoginresponse = await GoogleLoginApi(formData);
        if (getLoginresponse.status == 200) {
            localStorage.removeItem('token');
            localStorage.setItem('token', getLoginresponse.access_token);
            navigate("/");
        }
    }

    const onFailure = (res) => {
        console.log("failure ", res);
    }

    const initializeGapi = () => {
        gapi.client.init({
            clientId: clientId,
            scope: "",
        });
    };

    const googleLogin = () => {
        gapi.load("client:auth2", initializeGapi);
    }

    useEffect(() => {
        var USER_TOKEN = localStorage.getItem('token');
        if (USER_TOKEN === null) {
            navigate('/login');
        } else {
            var getResponse = GetProfile(USER_TOKEN);
            if (getResponse == 401) {
                navigate('/login');
            }
        }
        googleLogin();
    }, [])

    const RegisterSubmit = async () => {
        const formData = new FormData()
        formData.append("email", email)
        formData.append("password", password)
        const getLoginresponse = await LoginApi(formData);
        if (getLoginresponse.status === 200) {
            localStorage.setItem('token', getLoginresponse.token);
            navigate("/");
        } else {
            setAlert(true);
            setMessage(getLoginresponse.message)
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center p-5">
                <Card style={{ width: '35rem' }}>
                    <Card.Body>
                        {
                            alert && (
                                <Alert key="warning" variant="warning">
                                    {message}
                                </Alert>
                            )
                        }
                        <Card.Title className="p-3">Login</Card.Title>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Password"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                type="password"
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </InputGroup>

                        <Button variant="primary" onClick={(e) => {
                            RegisterSubmit(e)
                        }}>Login</Button>
                        <a href="/register" className="p-4">Register</a>
                        <div className="text-center">
                            Or
                            {/* <div>
                                <button onClick={(e) => { signin(e) }} className="btn btn-outline-primary btn-sm">
                                    <img src={google} alt="Google" width="25px" height="25px" />
                                    <span>Login With Google</span>
                                </button>
                            </div> */}
                            <div>
                                <GoogleLogin
                                    clientId='152246703103-vcjsdt053c1q2i7cjr6p93i379oe31hd.apps.googleusercontent.com'
                                    buttonText='Login with Google'
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    style={{ margin: '100px' }}
                                    isSignedIn={true}
                                />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Login