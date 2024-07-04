import React from 'react';
import Header from '../component/Header';
import './stylehead.css';
import pic from '../picture/1 (1).jpeg';

const HomePage = () => {
    return (
        <>
            <Header />
            <div className='bo'>
                <div className='le'>
                    <hr />
                    <h1 className='l01'>Nadarajah</h1>
                    
                    <h1 className='leftletter'>Lucshini</h1>
                    <hr />
                    <h3>Undergraduate of University of Vavuniya</h3>
                    <hr />
                </div>
                <div className='pic'>
                    <img src={pic} alt="Lucshini" />
                </div>
            </div>
        </>
    );
};

export default HomePage;
