import React from 'react'
import Card from 'react-bootstrap/Card';
import './Message.css';
import Image from 'react-bootstrap/Image';

function Message() {
    return (
        <div className="container py-3">
            <div className="row">
                <div className="col-md-9">
                    <Card>
                        <div class="container_list">
                            <div class="contact-list">
                                <h2>Contact List</h2>
                                <ul>
                                    <li>John Doe</li>
                                    <li>Jane Smith</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>
                                    <li>Michael Johnson</li>

                                </ul>
                            </div>
                            <div class="message-window">
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
                    Footer
                </div>
            </div>
        </div>
    )
}

export default Message