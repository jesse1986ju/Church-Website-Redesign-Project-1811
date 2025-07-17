import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiDollarSign, FiCreditCard, FiShield, FiCheck } = FiIcons;

const Give = () => {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [givingType, setGivingType] = useState('general');

  const quickAmounts = [25, 50, 100, 250, 500];

  const givingOptions = [
    {
      id: 'general',
      title: 'General Fund',
      description: 'Support our church operations, ministries, and community outreach programs.'
    },
    {
      id: 'missions',
      title: 'Missions',
      description: 'Help us spread the gospel and support missionaries around the world.'
    },
    {
      id: 'building',
      title: 'Building Fund',
      description: 'Contribute to our facility improvements and expansion projects.'
    },
    {
      id: 'benevolence',
      title: 'Benevolence',
      description: 'Assist families in need within our church and community.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation submitted:', { amount, frequency, givingType });
  };

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
              Give Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Your generosity helps us serve our community and spread God's love
            </motion.p>
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-playfair italic text-gray-700 mb-4"
          >
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          </motion.blockquote>
          <p className="text-gray-600">2 Corinthians 9:7</p>
        </div>
      </section>

      {/* Giving Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
                Make a Donation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Giving Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Choose where to give
                  </label>
                  <div className="space-y-2">
                    {givingOptions.map((option) => (
                      <label key={option.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="givingType"
                          value={option.id}
                          checked={givingType === option.id}
                          onChange={(e) => setGivingType(e.target.value)}
                          className="mt-1 text-blue-600"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{option.title}</div>
                          <div className="text-sm text-gray-600">{option.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Amount
                  </label>
                  <div className="grid grid-cols-5 gap-2 mb-3">
                    {quickAmounts.map((quickAmount) => (
                      <button
                        key={quickAmount}
                        type="button"
                        onClick={() => setAmount(quickAmount.toString())}
                        className={`py-2 px-3 text-sm rounded-lg border transition-colors ${
                          amount === quickAmount.toString()
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        ${quickAmount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <SafeIcon icon={FiDollarSign} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Frequency
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['one-time', 'monthly', 'weekly'].map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setFrequency(freq)}
                        className={`py-2 px-4 text-sm rounded-lg border transition-colors capitalize ${
                          frequency === freq
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {freq.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiHeart} className="w-5 h-5" />
                  <span>Give ${amount || '0'}</span>
                </button>
              </form>

              {/* Security Note */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <SafeIcon icon={FiShield} className="w-4 h-4" />
                  <span>Your donation is secure and encrypted</span>
                </div>
              </div>
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Give */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Give?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">Support our ministries and outreach programs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">Help maintain our facilities and operations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">Fund missions and community service</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">Provide resources for spiritual growth</span>
                  </div>
                </div>
              </div>

              {/* Other Ways to Give */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Other Ways to Give
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">In Person</h4>
                    <p className="text-sm text-gray-600">
                      Drop your offering in the collection plate during Sunday service
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">By Mail</h4>
                    <p className="text-sm text-gray-600">
                      Send checks to: 123 Faith Street, Hope City, HC 12345
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Bank Transfer</h4>
                    <p className="text-sm text-gray-600">
                      Set up automatic transfers from your bank account
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Questions About Giving?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our finance team is here to help with any questions about donations or tithing.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Finance Team
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;