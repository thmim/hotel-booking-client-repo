import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-32 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Manager Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center"
        >
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Hotel Manager"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Mr. Kamal Hossain</h2>
          <p className="text-gray-500 mb-6">Hotel Manager</p>

          <div className="space-y-4 text-gray-700 w-full">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              <span>+880 1712-345678</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <span>manager@grandvista.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Grand Vista Hotel, Cox's Bazar, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-blue-600" />
              <span>Mon - Sun: 9:00 AM - 10:00 PM</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-medium transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
