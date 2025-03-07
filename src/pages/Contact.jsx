import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or concerns? We're here to help. Contact Nepal Oil Corporation through any of the methods below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ram"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nepal"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ram@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+977 98XXXXXXXX"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Location</h3>
                    <p className="text-gray-600">Babarmahal, Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Number</h3>
                    <p className="text-gray-600">+977-1-4262780</p>
                    <p className="text-gray-600">+977-1-4263499</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Address</h3>
                    <p className="text-gray-600">info@noc.org.np</p>
                    <p className="text-gray-600">support@noc.org.np</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaClock className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Sunday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;