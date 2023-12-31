import React from 'react'
import Card from 'react-bootstrap/Card';
import './Message.css';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function Message() {
    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-md-9">
                    <Card>
                        <div class="container_list">
                            <div class="contact-list">
                                <div className="message_title">
                                    <h5 className="text-right px-2 parent_message">Messaging</h5>
                                    <hr />
                                </div>
                                <div className="d-flex">
                                    <Image src="https://www.blogger.com/img/logo_blogger_40px.png" width="50px" height="50px" className="px-1" roundedCircle />
                                    <InputGroup className="px-1">
                                        <Form.Control
                                            className="post_input"
                                            placeholder="Search..."
                                            aria-label="Search"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </div>
                                <hr />
                                <ul>
                                    <li>
                                        <div className="d-flex px-0">
                                            <Image src="https://www.blogger.com/img/logo_blogger_40px.png" width="50px" height="50px" className="px-1" roundedCircle />
                                            <h6 className="contact_name">
                                                John Doe
                                            </h6>
                                            <p className="latest_message">hai from messge</p>
                                            <div className="message_time">
                                                12:45PM
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex px-0">
                                            <Image src="https://www.blogger.com/img/logo_blogger_40px.png" width="50px" height="50px" className="px-1" roundedCircle />
                                            <h6 className="contact_name">
                                                John Doe
                                            </h6>
                                            <p className="latest_message">hai from messge</p>
                                            <div className="message_time">
                                                12:45PM
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex px-0">
                                            <Image src="https://www.blogger.com/img/logo_blogger_40px.png" width="50px" height="50px" className="px-1" roundedCircle />
                                            <h6 className="contact_name">
                                                John Doe
                                            </h6>
                                            <p className="latest_message">hai from messge</p>
                                            <div className="message_time">
                                                12:45PM
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex px-0">
                                            <Image src="https://www.blogger.com/img/logo_blogger_40px.png" width="50px" height="50px" className="px-1" roundedCircle />
                                            <h6 className="contact_name">
                                                John Doe
                                            </h6>
                                            <p className="latest_message">hai from messge</p>
                                            <div className="message_time">
                                                12:45PM
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex px-0">
                                            <Image src="https://www.blogger.com/img/logo_blogger_40px.png" width="50px" height="50px" className="px-1" roundedCircle />
                                            <h6 className="contact_name">
                                                John Doe
                                            </h6>
                                            <p className="latest_message">hai from messge</p>
                                            <div className="message_time">
                                                12:45PM
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="message-window">
                                <Card className="message_header">
                                    <div className="d-flex message_contact_person">
                                        <Image src="https://www.blogger.com/img/logo_blogger_40px.png" width="40px" height="40px" className="px-1" roundedCircle />
                                        <div>
                                            <h6> Peter </h6>
                                            <span>Head of Department</span>
                                        </div>
                                    </div>
                                </Card>
                                <div class="message-history">
                                    <div class="message incoming">
                                        <p>Hello there!</p>
                                    </div>
                                    <div class="message outgoing">
                                        <p>Hi! How are you?</p>
                                    </div>
                                </div>
                                <div class="message-input">
                                    <input type="text" placeholder="Type your message..." />
                                    <button>Send</button>
                                </div>
                            </div>
                        </div>
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
        </div>
    )
}

export default Message