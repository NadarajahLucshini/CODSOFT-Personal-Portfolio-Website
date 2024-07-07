import React from 'react';
import Header from '../component/Header';
import './stylehead.css';
import pic from '../picture/1__1_-removebg-preview.png';


const HomePage = () => {
    return (
        <>
            <Header />
            <div className='bo'>
                <div className='le'>
                    
                    <h1 className='l01'>Nadarajah</h1>
                    
                    <h1 className='leftletter'>Lucshini</h1>
                   
                    <h3>Undergraduate of University of Vavuniya</h3>
                   
                </div>
                <div className='pic'>
                    <img src={pic} alt="Lucshini" />
                </div>
            </div>
            <script src="script.js"></script>
        </>
    );
};

export default HomePage;
