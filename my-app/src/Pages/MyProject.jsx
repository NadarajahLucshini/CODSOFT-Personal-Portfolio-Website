import React, { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './style.css';
import Header from '../component/Header';
import images from './images'; // Adjust the path as per your project structure

const MyProject = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            effect: 'cards', // or 'fade', 'cards'
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            spaceBetween: 30,
            loop: false,
        });

        swiper.on('click', (swiper, event) => {
            const clickedSlide = event.target.closest('.swiper-slide');
            if (clickedSlide) {
                const index = clickedSlide.dataset.index;
                setSelectedImage(images[index]);
            }
        });
    }, [images]);


    return (
        <>
            <div>
                <Header />
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {images.map((image, index) => (
                            <div key={index} className="swiper-slide" data-index={index}>
                                <div className="swiper-slide-img">
                                    <img src={image.src} alt={image.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {selectedImage && (
                    <div className='imageslide'>
                        <div className='pra'>
                            <h2>{selectedImage.title}</h2>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MyProject;
