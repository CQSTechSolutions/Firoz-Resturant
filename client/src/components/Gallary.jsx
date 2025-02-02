import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallary = () => (
    <>
        <div className="container mx-auto text-center" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-[#7b1315] mb-4">Gallery</h2>
            <p className="text-lg text-gray-600"><span className="font-semibold">Check</span> <span className="description-title text-[#7b1315]">Our Gallery</span></p>
        </div>
        <div className="container mx-auto mt-10" data-aos="fade-up" data-aos-delay="100">
            <Carousel showArrows infiniteLoop useKeyboardArrows autoPlay interval={5000}>
                {Array.from({ length: 11 }, (_, index) => (
                    <div key={index} className="mx-auto h-80 w-100 object-cover">
                        <a className="glightbox" data-gallery="images-gallery" href={`/gallery/gallery-${index + 1}.webp`}>
                            <img src={`/gallery/gallery-${index + 1}.webp`} className="img-fluid rounded-lg shadow-lg transition-transform transform hover:scale-105" alt={`Gallery Image ${index + 1}`} />
                        </a>
                    </div>
                ))}
            </Carousel>
        </div>
    </>
);

export default Gallary;
