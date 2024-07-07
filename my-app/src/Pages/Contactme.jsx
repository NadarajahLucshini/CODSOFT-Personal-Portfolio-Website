import React from 'react';
import Header from '../component/Header';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <>
            <Header />
            <div className="contact-container">
                <h1>Contact Me</h1>
                <p>If you have any questions or want to get in touch, please use the form below or reach out via the provided contact details.</p>
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fas fa-home"></i>
                        <p>1 st Cross Kommathurai Chenkalady</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <p>077 378 6703</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <p>nadarajahlucshini@gmal.com</p>
                    </div>
                </div>
                <div className='big'>
                    <form className="contact-form">
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="name">Name:</label></td>
                                    <td><input type="text" id="name" name="name" required /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="email">Email:</label></td>
                                    <td><input type="email" id="email" name="email" required /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="message">Message:</label></td>
                                    <td><textarea id="message" name="message" required></textarea></td>
                                </tr>
                                <tr>
                                    <td colSpan="2" style={{ textAlign: 'center' }}>
                                        <button type="submit">Send</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>

                    <div className="social-media">
                        <h2>Follow Me</h2>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMe;
