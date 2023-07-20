import React, { useEffect, useState } from 'react'
import { GetProfile } from '../Auth/Api';
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAirFreshener } from '@fortawesome/free-solid-svg-icons'

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
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10">
                    <div className="listing_bar">
                        <div className="p-3">
                            <Breadcrumb>
                                <Breadcrumb.Item href="#"> <FontAwesomeIcon icon={faHome} color="black" className="px-1" />Home</Breadcrumb.Item>
                                {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                    Library
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item> */}
                            </Breadcrumb>
                            Nexevo Technologies is a professional website designing and development company in Bangalore. We have received immense appreciation for our affordable website development services and qualified team, making us an award-winning website designing and development company in the city. We started out in 2012 and over the past decade, we have provided flawless contributions in website designing, website development, online marketing, creative logo design, web redesigning, advanced multiple portal developments, etc. We ensure to make your website projects stand out from the rest which has helped us attain the trust of various leading brands as well as 1000+ reputed establishments. Our focus is to work with enterprises across the globe, helping companies compete effectively in the market.

                            As one of the renowned digital marketing and website design companies in Bangalore, we craft websites using the latest technology such that they have 100% mobile responsive web interface. Apart from the aforementioned services, we also provide assistance in Search Engine Optimization(SEO), CMS web development, pay-per-click marketing (PPC), advertising, PHP, Python, Angular, React JS website development, Social media marketing, and WordPress Development and other digital-related services too.

                            Our Self Update Console and CMS (Content Management System) web design services are something that you cannot avoid. The biggest benefit from these is that you can easily make the necessary changes in your quality website at any time. Furthermore, the templates used for the website design are chosen in a way that best compliments the brand concept. More than thousands of our clients, many of which are high-profile report that their websites now perform in an optimal manner alongside swift updates. And the best part? You can access it all at budget-friendly rates at the highest quality. Not to mention the expert guidance you will receive side by side!

                            Our team comprises top SEO experts from Bangalore who have proven time and again to make client websites attain a high ranking on Google and other search engines. Given the increasing market competition at a global level, we ensure to craft our website design solutions after immense research such that the possibility of your success is higher than ever. Added to that, our marketing services come at affordable prices so that you don’t have to ever settle for average quality techniques. We guarantee that our consistent hard work and dedication to deliver the best for your brand reputation and customer satisfaction are worth every penny.
                            Nexevo Technologies is a professional website designing and development company in Bangalore. We have received immense appreciation for our affordable website development services and qualified team, making us an award-winning website designing and development company in the city. We started out in 2012 and over the past decade, we have provided flawless contributions in website designing, website development, online marketing, creative logo design, web redesigning, advanced multiple portal developments, etc. We ensure to make your website projects stand out from the rest which has helped us attain the trust of various leading brands as well as 1000+ reputed establishments. Our focus is to work with enterprises across the globe, helping companies compete effectively in the market.

                            time and again to make client websites attain a high ranking on Google and other search engines. Given the increasing market competition at a global level, we ensure to craft our website design solutions after immense research such that the possibility of your success is higher than ever. Added to that, our marketing services come at affordable prices so that you don’t have to ever settle for average quality techniques. We guarantee that our consistent hard work and dedication to deliver the best for your brand reputation and customer satisfaction are worth every penny.

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home