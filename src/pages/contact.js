import React from 'react';
import '../sass/contact.scss';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <div className="contact-box">
                <div className="office-details">
                    <h2>Our Office</h2>
                    <p> Kolkata 700001, India</p>
                    <p>Phone: +91 8918001300</p>
                    <p><a href="mailto:mail@example.com" className="email-link">mail@example.com</a></p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.781201773627!2d88.36389131533128!3d22.572646785178654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a9f9b3891d%3A0x899ba73351f855de!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sin!4v1694092900000!5m2!1sen!2sin"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
