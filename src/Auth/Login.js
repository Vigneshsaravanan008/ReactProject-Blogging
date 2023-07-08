import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { LoginApi } from './Api';
import Alert from 'react-bootstrap/Alert';
import { useHistory } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const [message, setMessage] = useState("");
    let history = useHistory();

    const RegisterSubmit = async () => {
        const formData = new FormData()
        formData.append("email", email)
        formData.append("password", password)
        const getLoginresponse = await LoginApi(formData);
        if (getLoginresponse.status === 200) {
            localStorage.setItem('token', getLoginresponse.token);
            history.push('/home')
        } else {
            setAlert(true);
            setMessage(getLoginresponse.message)
        }
        // setResponse(getRegisterresponse.message);
        console.log(getLoginresponse)
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
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login