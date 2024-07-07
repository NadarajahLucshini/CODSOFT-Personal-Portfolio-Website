import React from 'react';
import Header from '../component/Header';
import './styleabout.css';
import pic from '../picture/1 (2).jpeg';
import cv from '../picture/Copy of Nadarajah_Lucshini_Resume_20240603_095339_0000 (1).pdf';


const AboutMe = () => {
    return (
        <>
            <Header />
            <div className='detail'>
                <div className='skill'>
                    <div className='pic'>
                        <img src={pic} alt="Profile" className="profile-pic" />
                    </div>
                    <div className='c02'>
                        <h2>My Personal Expertise</h2>
                        <p>Hello! I'm Nadarajah Lucshini, a passionate IT professional with a Bachelor's degree in Information Technology from the University of Vavuniya. I have a strong background in web and app development, as well as cybersecurity.</p>
                        <a href={cv} download="Nadarajah_Lucshini_CV.pdf" className="cv-button">Download My CV</a>
                    </div>
                </div>
                <div className='sk'>
                    <h2>My Skills</h2>
                    <h3>Web Development</h3>
                    <div className='progress'>
                        <div className='progress-bar' style={{ width: '85%' }}></div>
                    </div>
                    <h4>85%</h4>

                    <h3>App Design</h3>
                    <div className='progress'>
                        <div className='progress-bar' style={{ width: '95%' }}></div>
                    </div>
                    <h4>95%</h4>

                    <h3>Landing Page Design</h3>
                    <div className='progress'>
                        <div className='progress-bar' style={{ width: '80%' }}></div>
                    </div>
                    <h4>80%</h4>
                </div>
                <div className='education'>
                    <h2>Education</h2>
                    <div className='edu-item'>
                        <h3>University of Vavuniya</h3>
                        <p>BSc IT</p>
                        <p>2019 - 2023</p>
                    </div>
                    <div className='edu-item'>
                        <h3>Cisco Networking Academy</h3>
                        <p>Introduction to Cybersecurity</p>
                        <p>Completed: September 30, 2023</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
