import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h4 className="font-bold mb-2 flex items-center justify-center text-lg">
                            <FaMapMarkerAlt className="mr-2 text-yellow-400" />
                            Address
                        </h4>
                        <p className="text-sm">AKBER'S Firoz Farsan, Ground Floor, Shop No 56, Khara Tank Road, Opp. Al Sadaah, Mumbai 400003</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h4 className="font-bold mb-2 flex items-center justify-center text-lg">
                            <FaPhoneAlt className="mr-2 text-yellow-400" />
                            Contact
                        </h4>
                        <p className="text-sm">Phone: +91 12345 67890</p>
                        <p className="text-sm">Email: info@firozfarsan.com</p>
                    </div>
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h4 className="font-bold mb-2 flex items-center justify-center text-lg">
                            <FaClock className="mr-2 text-yellow-400" />
                            Opening Hours
                        </h4>
                        <p className="text-sm">All Week: 10 AM - 8 PM</p>
                    </div>
                </div>
                <div className="mt-8 flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                        <FaFacebook className="inline-block mr-1" /> Facebook
                    </a>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                        <FaInstagram className="inline-block mr-1" /> Instagram
                    </a>
                    <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
                        <FaTwitter className="inline-block mr-1" /> Twitter
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;