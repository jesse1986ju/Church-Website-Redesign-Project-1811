import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTarget, FiEye, FiHeart, FiUsers } = FiIcons;

const About = () => {
  const leadership = [
    {
      name: 'Pastor John Smith',
      role: 'Senior Pastor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Pastor John has been leading our congregation for over 15 years with passion and dedication. He holds a Master of Divinity and is committed to teaching God\'s word with clarity and love.'
    },
    {
      name: 'Pastor Sarah Johnson',
      role: 'Associate Pastor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Pastor Sarah oversees our youth ministry and women\'s programs. She brings energy and enthusiasm to everything she does and has a heart for reaching the next generation.'
    },
    {
      name: 'Michael Chen',
      role: 'Worship Leader',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Michael leads our worship team with skill and passion. He has been serving in music ministry for over 10 years and loves creating an atmosphere of worship and praise.'
    }
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Love',
      description: 'We believe love is the foundation of everything we do, reflecting God\'s love for us and our love for others.'
    },
    {
      icon: FiUsers,
      title: 'Community',
      description: 'We are committed to building authentic relationships and supporting one another in our faith journey.'
    },
    {
      icon: FiTarget,
      title: 'Purpose',
      description: 'We help people discover their God-given purpose and equip them to make a difference in the world.'
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
              About Lifeline Ministry
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Our story, mission, and the people who make our church a place of hope and healing
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Lifeline Ministry Church was founded in 1985 with a simple yet profound mission: 
                to be a beacon of hope in our community. What started as a small gathering of 
                believers in a local community center has grown into a thriving congregation 
                that serves families throughout our city.
              </p>
              <p className="mb-6">
                Our name "Lifeline" represents our commitment to being a source of spiritual 
                rescue and renewal for all who enter our doors. We believe that everyone, 
                regardless of their background or circumstances, deserves to experience the 
                transformative power of God's love.
              </p>
              <p>
                Today, we continue to build on our founding principles while adapting to meet 
                the needs of our modern community. We are a church that honors tradition while 
                embracing innovation, always seeking new ways to share the timeless message of hope.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiTarget} className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600">
                To connect people with God, build authentic community, and equip believers 
                to make a lasting impact in their world through the love and power of Jesus Christ.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiEye} className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600">
                To be a church where every person can discover their purpose, develop their 
                potential, and deploy their gifts to serve God and others in meaningful ways.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated team that guides our church family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;