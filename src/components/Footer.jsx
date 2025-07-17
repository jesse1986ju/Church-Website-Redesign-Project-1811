import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiPhone, FiMail, FiFacebook, FiInstagram, FiYoutube, FiArrowRight } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-sf text-2xl font-semibold">
                Lifeline Ministry
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Where faith meets innovation. A modern community centered on hope, growth, and purpose. Join us as we journey together in faith.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">123 Faith Street, Hope City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">hello@lifelineministrychurch.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-sf font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span>About Us</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link to="/sermons" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span>Sermons</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span>Events</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link to="/give" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span>Give</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                </Link>
              </li>
              <li>
                <Link to="/new-here" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                  <span>New Here?</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-sf font-semibold mb-6">Service Times</h3>
            <div className="space-y-4 text-gray-300">
              <div className="bg-gray-800 p-4 rounded-xl">
                <p className="font-medium text-white">Sunday Worship</p>
                <p className="text-sm">9:00 AM • 11:00 AM</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-xl">
                <p className="font-medium text-white">Wednesday Study</p>
                <p className="text-sm">7:00 PM</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-xl">
                <p className="font-medium text-white">Friday Prayer</p>
                <p className="text-sm">6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <SafeIcon icon={FiFacebook} className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <SafeIcon icon={FiInstagram} className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <SafeIcon icon={FiYoutube} className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Lifeline Ministry Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;