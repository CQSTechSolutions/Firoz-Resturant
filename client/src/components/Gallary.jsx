import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallary = () => {
    return (
        <>
            <div className="container mx-auto text-center" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-[#7b1315] mb-4">Gallery</h2>
                <p className="text-lg text-gray-600"><span className="font-semibold">Check</span> <span className="description-title text-[#7b1315]">Our Gallery</span></p>
            </div>

            <div className="container mx-auto mt-10 border-2 border-green-500" data-aos="fade-up" data-aos-delay="100" style={{ height: '400px' }}>
                <Carousel showArrows={true} infiniteLoop={true} useKeyboardArrows autoPlay interval={6000}>
                    {Array.from({ length: 11 }, (_, index) => (
                        <div key={index} className="">
                            <a className="glightbox" data-gallery="images-gallery" href={`/gallery/gallery-${index + 1}.webp`}>
                                <img src={`/gallery/gallery-${index + 1}.webp`} className="img-fluid rounded-lg shadow-lg transition-transform transform hover:scale-105" alt={`Gallery Image ${index + 1}`} />
                            </a>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default Gallary;
