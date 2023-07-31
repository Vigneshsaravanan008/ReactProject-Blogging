import React from 'react'

function Footer() {
    return (
        <div>
            <div className="sidebar_content">
                <div className="text-center mt-2 p-3">
                    Blogging
                </div>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Privacy & Terms</li>
                    </ul>
                    <hr />
                    <ul>
                        <li><h5>
                            Community
                        </h5></li>
                        <ul>
                            <li>
                                Github
                            </li>
                            <li>
                                Stackoverflow
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <p className="text-center text-primary mt-2">Blogging © 2023</p>
        </div>
    )
}

export default Footer