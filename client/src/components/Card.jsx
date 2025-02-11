import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProductCard = ({ product }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const getImageUrl = (url) => {
        if (!url) return '';
        const fileId = url.split('/d/')[1]?.split('/')[0];
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
    };

    return (
        <div className="w-[350px] bg-white rounded-xl overflow-hidden shadow-lg m-4 hover:shadow-2xl transition-shadow duration-300">
            <div className="h-[250px] w-full">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    className="h-full"
                >
                    {product.images.map((image, index) => (
                        <div key={index} className="h-[250px]">
                            <img 
                                src={getImageUrl(image)}
                                alt={`${product.name} - ${index + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    console.error('Image failed to load:', image);
                                    e.target.src = '/logo.png';
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
            
            <div className="p-6">
                <h3 className="font-bold text-2xl mb-3 text-[#7b1315]">{product.name}</h3>
                {product.description && (
                    <p className="text-gray-700 text-base mb-4">
                        {product.description}
                    </p>
                )}
                
                <div className="flex justify-between items-center">
                    {product.price && (
                        <span className="bg-[#7b1315] text-white px-4 py-2 rounded-full font-semibold">
                            ₹{product.price}
                        </span>
                    )}
                    <button 
                        className="bg-[#7b1315] text-white px-4 py-2 rounded-lg hover:bg-[#641012] transition-colors duration-300"
                        onClick={() => window.open('https://wa.link/ywuse1', '_blank')}
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
