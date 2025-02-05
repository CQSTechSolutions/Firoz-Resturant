import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h4 className="font-bold mb-2 flex items-center justify-center text-lg" style={{ color: '#7b1315' }}>
                            <FaMapMarkerAlt className="mr-2    "style={{ color: '#7b1315' }} />
                            Address
                        </h4>
                        <p className="text-sm" style={{ color: 'black' }}>AKBER'S Firoz Farsan, Ground Floor, Shop No 56, Khara Tank Road, Opp. Al Sadaah, Mumbai 400003</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h4 className="font-bold mb-2 flex items-center justify-center text-lg" style={{ color: '#7b1315' }}>
                            <FaPhoneAlt className="mr-2    " style={{ color: '#7b1315' }}/>
                            Contact
                        </h4>
                        <p className="text-sm" style={{ color: 'black' }}>Phone: +91 9821246147</p>
                        <p className="text-sm" style={{ color: 'black' }}>Email: info@firozfarsan.com</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h4 className="font-bold mb-2 flex items-center justify-center text-lg" style={{ color: '#7b1315' }}>
                            <FaClock className="mr-2    "style={{ color: '#7b1315' }}/>
                            Opening Hours
                        </h4>
                        <p className="text-sm" style={{ color: 'black' }}>All Week: 10 AM - 8 PM</p>
                    </div>
                </div>
                {/* <div className="mt-8 flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:    transition duration-300">
                        <FaFacebook className="inline-block mr-1" /> Facebook
                    </a>
                    <a href="#" className="text-gray-400 hover:    transition duration-300">
                        <FaInstagram className="inline-block mr-1" /> Instagram
                    </a>
                    <a href="#" className="text-gray-400 hover:    transition duration-300">
                        <FaTwitter className="inline-block mr-1" /> Twitter
                    </a>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer;