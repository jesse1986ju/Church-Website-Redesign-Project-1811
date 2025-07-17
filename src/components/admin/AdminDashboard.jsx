import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { 
  FiGrid, FiFileText, FiImage, FiSettings, FiUsers, 
  FiLogOut, FiPlus, FiEye, FiBarChart2, FiEdit3, FiClock
} = FiIcons;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Mock data for demo purposes
  const recentPages = [
    { id: 1, title: 'Sunday Service', status: 'Published', date: '2024-05-12', views: 152 },
    { id: 2, title: 'Youth Retreat', status: 'Draft', date: '2024-05-10', views: 0 },
    { id: 3, title: 'Bible Study Series', status: 'Published', date: '2024-05-08', views: 78 },
    { id: 4, title: 'Community Outreach', status: 'Published', date: '2024-05-05', views: 125 },
  ];
  
  const stats = [
    { title: 'Total Pages', value: '24', icon: FiFileText, color: 'blue' },
    { title: 'Media Files', value: '87', icon: FiImage, color: 'purple' },
    { title: 'Total Views', value: '2.4K', icon: FiEye, color: 'green' },
    { title: 'Users', value: '5', icon: FiUsers, color: 'orange' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm fixed h-full top-0 pt-20">
        <div className="p-4">
          <div className="px-4 py-3">
            <p className="text-xs font-medium text-gray-500 uppercase">Admin Panel</p>
          </div>
          
          <nav className="mt-2 space-y-1">
            <Link 
              to="/admin" 
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                activeTab === 'dashboard' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              <SafeIcon icon={FiGrid} className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
            
            <Link 
              to="/admin/pages" 
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                activeTab === 'pages' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('pages')}
            >
              <SafeIcon icon={FiFileText} className="w-5 h-5 mr-3" />
              Pages
            </Link>
            
            <Link 
              to="/admin/media" 
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                activeTab === 'media' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('media')}
            >
              <SafeIcon icon={FiImage} className="w-5 h-5 mr-3" />
              Media
            </Link>
            
            <Link 
              to="/admin/settings" 
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                activeTab === 'settings' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('settings')}
            >
              <SafeIcon icon={FiSettings} className="w-5 h-5 mr-3" />
              Settings
            </Link>
            
            <Link 
              to="/admin/users" 
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                activeTab === 'users' 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('users')}
            >
              <SafeIcon icon={FiUsers} className="w-5 h-5 mr-3" />
              Users
            </Link>
          </nav>
          
          <div className="mt-10 px-4">
            <button 
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg"
            >
              <SafeIcon icon={FiLogOut} className="w-5 h-5 mr-3" />
              Log out
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 pl-64">
        <main className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-sf font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, Admin</p>
            </div>
            
            <Link 
              to="/admin/pages/new" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <SafeIcon icon={FiPlus} className="w-5 h-5 mr-2" />
              New Page
            </Link>
          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                    <SafeIcon 
                      icon={stat.icon} 
                      className={`w-6 h-6 text-${stat.color}-600`} 
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{stat.value}</h3>
                    <p className="text-sm text-gray-500">{stat.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Pages */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Recent Pages</h2>
                <Link to="/admin/pages" className="text-sm text-blue-600 hover:text-blue-500">
                  View all
                </Link>
              </div>
              
              <div className="divide-y divide-gray-100">
                {recentPages.map((page) => (
                  <div key={page.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-base font-medium text-gray-900">{page.title}</h3>
                        <div className="flex items-center mt-1 space-x-4 text-sm">
                          <div className="flex items-center text-gray-500">
                            <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                            <span>{page.date}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-500">
                            <SafeIcon icon={FiEye} className="w-4 h-4 mr-1" />
                            <span>{page.views}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          page.status === 'Published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {page.status}
                        </span>
                        
                        <Link 
                          to={`/admin/pages/${page.id}`}
                          className="p-1 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50"
                        >
                          <SafeIcon icon={FiEdit3} className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              
              <div className="p-6 space-y-4">
                <Link 
                  to="/admin/pages/new"
                  className="flex items-center p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <SafeIcon icon={FiPlus} className="w-5 h-5 mr-3" />
                  <span>Create new page</span>
                </Link>
                
                <Link 
                  to="/admin/media"
                  className="flex items-center p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <SafeIcon icon={FiImage} className="w-5 h-5 mr-3" />
                  <span>Upload media</span>
                </Link>
                
                <Link 
                  to="/admin/settings"
                  className="flex items-center p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <SafeIcon icon={FiSettings} className="w-5 h-5 mr-3" />
                  <span>Site settings</span>
                </Link>
                
                <Link 
                  to="/"
                  target="_blank"
                  className="flex items-center p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <SafeIcon icon={FiEye} className="w-5 h-5 mr-3" />
                  <span>View site</span>
                </Link>
              </div>
              
              {/* Analytics preview */}
              <div className="px-6 py-4 border-t border-gray-100">
                <h3 className="text-base font-medium text-gray-900 mb-3">Traffic Overview</h3>
                <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="flex items-center">
                    <SafeIcon icon={FiBarChart2} className="w-6 h-6 text-blue-500 mr-2" />
                    <span className="text-sm text-gray-600">Analytics preview</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;