import React from 'react'
import Card from 'react-bootstrap/Card';
import './Footer.css'
function Footer() {
    return (
        <div>
            <Card className="mt-3">
                <Card.Body>
                    <Card.Text className="text-info">Recent News</Card.Text>
                    <ul>
                        <li>Gig work surges across sectors</li>
                        <li>Gig work surges across sectors</li>
                        <li>Gig work surges across sectors</li>
                    </ul>
                </Card.Body>
            </Card>
            <Card className="mt-3">
                <Card.Body>
                    <Card.Text className="text-info">Recent</Card.Text>
                    <ul>
                        <li>Gaming</li>
                        <li>Sports</li>
                        <li>Telivision</li>
                    </ul>
                </Card.Body>
            </Card>
            <ul className="footer_text mt-3 fs-12">
                <li className="footer_link">About</li>
                <li className="footer_link">Accessibility</li>
                <li className="footer_link">Privacy & Terms</li>
                <li className="footer_link">Ad Choices</li>
                <li className="footer_link">Advertising</li>
            </ul>
            <p className="text-center text-primary mt-2 fs-12">Blogging © 2023 Corporation © 2023</p>
        </div>
    )
}

export default Footer

