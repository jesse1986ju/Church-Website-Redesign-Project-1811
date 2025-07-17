import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiClock, FiMapPin, FiUsers, FiFilter } = FiIcons;

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Sunday Worship Service',
      date: '2024-01-28',
      time: '9:00 AM & 11:00 AM',
      location: 'Main Sanctuary',
      category: 'worship',
      description: 'Join us for inspiring worship, prayer, and a powerful message from God\'s word.',
      recurring: 'Weekly',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Wednesday Bible Study',
      date: '2024-01-31',
      time: '7:00 PM',
      location: 'Fellowship Hall',
      category: 'study',
      description: 'Deep dive into scripture with discussion and fellowship. All ages welcome.',
      recurring: 'Weekly',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Youth Group Meeting',
      date: '2024-02-02',
      time: '6:30 PM',
      location: 'Youth Center',
      category: 'youth',
      description: 'Fun activities, games, and spiritual growth for teens ages 13-18.',
      recurring: 'Weekly',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Community Outreach Day',
      date: '2024-02-10',
      time: '9:00 AM - 3:00 PM',
      location: 'Various Locations',
      category: 'outreach',
      description: 'Serve our community through various volunteer opportunities and acts of kindness.',
      recurring: 'Monthly',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Women\'s Ministry Breakfast',
      date: '2024-02-15',
      time: '8:30 AM',
      location: 'Fellowship Hall',
      category: 'ministry',
      description: 'Ladies, join us for breakfast, fellowship, and encouraging conversation.',
      recurring: 'Monthly',
      image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Men\'s Prayer Breakfast',
      date: '2024-02-17',
      time: '7:00 AM',
      location: 'Fellowship Hall',
      category: 'ministry',
      description: 'Men, start your day with prayer, fellowship, and a hearty breakfast.',
      recurring: 'Monthly',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'worship', label: 'Worship' },
    { value: 'study', label: 'Bible Study' },
    { value: 'youth', label: 'Youth' },
    { value: 'ministry', label: 'Ministry' },
    { value: 'outreach', label: 'Outreach' }
  ];

  const filteredEvents = events.filter(event => 
    selectedCategory === 'all' || event.category === selectedCategory
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              Events & Activities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Join us for worship, fellowship, and opportunities to grow in faith
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <SafeIcon icon={FiFilter} className="w-5 h-5 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded capitalize">
                      {event.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {event.recurring}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <SafeIcon icon={FiClock} className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>
                  
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-8">
              Regular Service Times
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sunday Worship
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  9:00 AM & 11:00 AM
                </p>
                <p className="text-gray-600 text-sm">
                  Main Sanctuary
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Bible Study
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  Wednesday 7:00 PM
                </p>
                <p className="text-gray-600 text-sm">
                  Fellowship Hall
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Prayer Meeting
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  Friday 6:00 PM
                </p>
                <p className="text-gray-600 text-sm">
                  Prayer Room
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;