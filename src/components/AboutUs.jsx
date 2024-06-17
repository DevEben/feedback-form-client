import React from 'react';
import "./AboutUs.css";
import { FaUsers, FaHandshake, } from 'react-icons/fa';
import { TbTargetArrow } from "react-icons/tb";

const AboutUs = () => {
    return (
        <main className="main">
            <section id="about" className="about">
                <div className="containerA">
                    <div className="imgContainer">
                        <img src="../../aboutUs.png" alt="Image" />
                    </div>

                    <div className="aboutUs">
                        <h3>About Us</h3>
                        <p>
                            Welcome to our Feedback Form project! Our Feedback Form project is designed to be simple yet powerful. We provide 
                            customizable forms that can be integrated into any website or application, making it easy for users to share their 
                            thoughts and suggestions. Our analytics tools help you understand the feedback and make informed decisions.
                        </p>

                        <div className="iconBox">
                            <div className="icon"><TbTargetArrow /></div>
                            <h4 className="titleA">Our Mission</h4>
                        </div>
                        <div className="desContainer">
                            <p className="description">
                                Our mission is to bridge the gap between users and developers by providing a seamless platform for collecting,
                                managing, and analyzing user feedback. We believe that listening to our users is the key to creating better products
                                and experiences.
                            </p>
                        </div>

                        <div className="iconBox">
                            <div className="icon"><FaUsers /></div>
                            <h4 className="titleA">Who We Are</h4>
                        </div>
                        <div className="desContainer">
                            <p className="description">
                                We are a dedicated team of developers, designers, and product managers who are passionate about improving user experiences.
                                With a diverse background in technology and user experience, we are committed to creating tools that empower both users and
                                developers.
                            </p>
                        </div>

                        <div className="iconBox">
                            <div className="icon"><FaHandshake /></div>
                            <h4 className="titleA">Why Choose Us?</h4>
                        </div>
                        <div className="desContainer">
                            <p className="description">
                                <ul>
                                    <li><strong> Easy Integration:</strong> Our forms are easy to integrate with just a few lines of code.</li>
                                    <li><strong> User-Friendly:</strong> Designed with simplicity and usability in mind.</li>
                                    <li><strong> Powerful Analytics:</strong> Gain insights from your feedback with our advanced analytics tools.</li>
                                    <li><strong> Secure and Private:</strong> We prioritize your data security and privacy.</li>
                                </ul>
                            </p>
                        </div>
                        {/* <div className="section">
                            <h2>Get In Touch</h2>
                            <p>
                                We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, feel free to reach
                                out to us. Contact us at <a href="mailto:support@feedbackform.com">support@feedbackform.com</a>.
                            </p>
                        </div> */}
                    </div>
                </div>
            </section>
        </main>
    );
}


export default AboutUs;