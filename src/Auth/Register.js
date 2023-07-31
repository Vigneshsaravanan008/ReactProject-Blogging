import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { GetProfile, RegisterApi } from './Api';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";

function Register() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        var USER_TOKEN = localStorage.getItem('token');
        if (USER_TOKEN === null) {
            navigate('/register');
        } else {
            var getResponse = GetProfile(USER_TOKEN);
            if (getResponse.status === 403) {
                navigate('/login');
            } else {
                navigate('/home');
            }
        }
    }, [])

    const RegisterSubmit = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("password", password)
        const getRegisterresponse = await RegisterApi(formData);
        if (getRegisterresponse.status === 200) {

        } else {
            setAlert(true);
            setMessage(getRegisterresponse.message)
        }
    }

    return (

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
                    <Card.Title className="p-3">Register</Card.Title>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Name"
                            aria-label="Name"
                            aria-describedby="basic-addon1"
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </InputGroup>
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
                    }}>Sign Up</Button>
                    <a href="/login" className="p-4">Already Have an Account</a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Register