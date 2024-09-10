import React, { useState } from 'react';
import '../sass/contact.scss';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add form submission logic here
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Contacts</h1>
                <div className="contact-buttons">
                    <button className="btn-home" onClick={() => window.location.href = "/"}>Home</button>
                    <button className="btn-contact" onClick={() => window.location.href = "/contact"}>Contact</button>
                </div>
            </div>
            <div className="contact-box">
                <div className="office-details">
                    <h2>Our Office</h2>
                    <p> WeWork Vaishnavi Signature. 78/9, Outer Ring Road, Hobli, beside Soul Space Spirit Central Mall, Bellandur, Varthur, Bengaluru, Karnataka 560103</p>
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

            {/* Add the form below the contact box */}
            <div className="contact-form-container">
                <h2>Get in Touch</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    
                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
