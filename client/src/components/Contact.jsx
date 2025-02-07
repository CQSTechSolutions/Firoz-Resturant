import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-50">
            {/* Section Title */}
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl font-bold text-[#1a202c] mb-3">Contact Us</h2>
                <div className="w-24 h-1 bg-[#1a202c] mx-auto mb-4"></div>
                <p className="text-lg text-gray-600">Need Help? We're Here For You</p>
            </div>

            <div className="container mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Section - Contact Info */}
                        <div className="bg-[#7b1315] p-8 lg:p-12 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-3xl font-extrabold mb-6" style={{ color: 'white' }}>Get in Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 bg-[#7b1315] p-4 rounded-lg transition duration-300 hover:bg-gray-700">
                                    <FaMapMarkerAlt className="w-6 h-6 mt-1    " />
                                    <div>
                                        <h4 className="font-semibold mb-1">Our Location</h4>
                                        <p className="text-gray-200">AKBER'S Firoz Farsan, Ground Floor, Shop No 56, Khara Tank Road, Opp. Al Sadaah, Mumbai 400003</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 bg-[#7b1315] p-4 rounded-lg transition duration-300 hover:bg-gray-700">
                                    <FaPhoneAlt className="w-5 h-5    "style={{ color: 'white' }} />
                                    <div>
                                        <h4 className="font-semibold mb-1">Call Us</h4>
                                        <p className="text-gray-200">+91 9821246147</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 bg-[#7b1315] p-4 rounded-lg transition duration-300 hover:bg-gray-700">
                                    <FaEnvelope className="w-5 h-5    "style={{ color: 'white' }} />
                                    <div>
                                        <h4 className="font-semibold mb-1">Email Us</h4>
                                        <p className="text-gray-200">sales@akbersfirozfarsan.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 bg-[#7b1315] p-4 rounded-lg transition duration-300 hover:bg-gray-700">
                                    <FaClock className="w-5 h-5    " style={{ color: 'white' }}/>
                                    <div>
                                        <h4 className="font-semibold mb-1">Opening Hours</h4>
                                        <p className="text-gray-200">All Week: 10 AM - 8 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <a 
                                href="https://wa.link/ywuse1" 
                                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg mt-8 hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg"
                            >
                                <FaWhatsapp className="w-5 h-5" />
                                <span className="font-semibold">Chat on WhatsApp</span>
                            </a>
                        </div>

                        {/* Right Section - Contact Form */}
                        <div className="p-8 lg:p-12">
                            <h3 className="text-2xl font-bold text-black mb-8">Send us a Message</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2" htmlFor="name">
                                        Your Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        className="w-full px-4 py-3 rounded-lg border border-black focus:ring-2 focus:ring-[#1a202c] focus:border-transparent transition duration-300"
                                        placeholder="John Doe"
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2" htmlFor="email">
                                        Your Email
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="w-full px-4 py-3 rounded-lg border border-black focus:ring-2 focus:ring-[#1a202c] focus:border-transparent transition duration-300"
                                        placeholder="john@example.com"
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2" htmlFor="subject">
                                        Subject
                                    </label>
                                    <input 
                                        type="text" 
                                        id="subject" 
                                        className="w-full px-4 py-3 rounded-lg border border-black focus:ring-2 focus:ring-[#1a202c] focus:border-transparent transition duration-300"
                                        placeholder="How can we help?"
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea 
                                        id="message" 
                                        rows="4" 
                                        className="w-full px-4 py-3 rounded-lg border border-black focus:ring-2 focus:ring-[#1a202c] focus:border-transparent transition duration-300"
                                        placeholder="Your message here..."
                                        required
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-[#1a202c] text-white py-3 px-6 rounded-lg hover:bg-[#2d3748] transform hover:-translate-y-1 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3511171623477!2d72.82888077502444!3d18.960094682220728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf39cc0d85ed%3A0xae82910815dd52c8!2sAKBER'S%20FIROZ%20FARAN!5e0!3m2!1sen!2sin!4v1737967218820!5m2!1sen!2sin" 
                        width="100%" 
                        height="400" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Contact;