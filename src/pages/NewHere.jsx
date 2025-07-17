import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiMapPin, FiUsers, FiHeart, FiCheck, FiArrowRight } = FiIcons;

const NewHere = () => {
  const steps = [
    {
      number: 1,
      title: 'Plan Your Visit',
      description: 'Choose a service time that works for you. We have services at 9:00 AM and 11:00 AM every Sunday.',
      icon: FiClock
    },
    {
      number: 2,
      title: 'What to Expect',
      description: 'Dress comfortably, arrive a few minutes early, and look for our welcome team in the lobby.',
      icon: FiUsers
    },
    {
      number: 3,
      title: 'Get Connected',
      description: 'After the service, grab some coffee and let us know how we can help you get involved.',
      icon: FiHeart
    }
  ];

  const faqs = [
    {
      question: 'What should I wear?',
      answer: 'Come as you are! We have people in everything from jeans to suits. The most important thing is that you feel comfortable.'
    },
    {
      question: 'What about my kids?',
      answer: 'We love kids! We have nursery care for infants and toddlers, and Sunday school for older children during the service.'
    },
    {
      question: 'How long is the service?',
      answer: 'Our services typically last about 75 minutes, including worship, announcements, and the message.'
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes! We have plenty of free parking in our lot, and our parking team will help direct you to available spots.'
    },
    {
      question: 'What if I have more questions?',
      answer: 'We\'d love to help! Feel free to contact us anytime or speak with someone from our welcome team on Sunday.'
    }
  ];

  const services = [
    {
      time: '9:00 AM',
      type: 'Early Service',
      description: 'A more intimate gathering with contemporary worship'
    },
    {
      time: '10:00 AM',
      type: 'Sunday School',
      description: 'Classes for all ages during this time'
    },
    {
      time: '11:00 AM',
      type: 'Late Service',
      description: 'Our main service with full worship team and choir'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-playfair font-bold mb-6"
            >
              Welcome to Our Family
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            >
              We're so glad you're considering visiting us! Here's everything you need to know for your first visit.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Service Times
            </h2>
            <p className="text-xl text-gray-600">
              Choose the service time that works best for you
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {service.time}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.type}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Your First Visit
            </h2>
            <p className="text-xl text-gray-600">
              Here's what to expect when you visit us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={step.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600">
              Your comfort and experience matter to us
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                During the Service
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Welcoming atmosphere with friendly people</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Contemporary worship music</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Practical, Bible-based messages</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">No pressure to participate or give</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Facilities & Amenities
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Free parking with assistance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Nursery care for infants & toddlers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Sunday school for children</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Coffee and refreshments</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from first-time visitors
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready to Visit?
          </h2>
          <p className="text-xl mb-8">
            We can't wait to meet you and welcome you into our church family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Get Directions</span>
              <SafeIcon icon={FiMapPin} className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewHere;