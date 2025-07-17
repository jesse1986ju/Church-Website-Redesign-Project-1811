import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import AdminLogin from '../components/admin/AdminLogin';
import AdminDashboard from '../components/admin/AdminDashboard';
import PageEditor from '../components/admin/PageEditor';
import MediaLibrary from '../components/admin/MediaLibrary';
import SiteSettings from '../components/admin/SiteSettings';
import UserManagement from '../components/admin/UserManagement';

const { FiLock } = FiIcons;

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if user is authenticated
  useEffect(() => {
    // For demo purposes, we'll just check if there's a token in localStorage
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="max-w-md mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <SafeIcon icon={FiLock} className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-sf font-bold text-gray-900">Admin Access</h1>
            </div>
            <p className="text-gray-600">
              Please sign in to access the admin dashboard.
            </p>
          </motion.div>
          
          <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />
        </div>
      </div>
    );
  }

  // If authenticated, show admin interface with routes
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/pages/*" element={<PageEditor />} />
        <Route path="/media" element={<MediaLibrary />} />
        <Route path="/settings" element={<SiteSettings />} />
        <Route path="/users" element={<UserManagement />} />
      </Routes>
    </div>
  );
};

export default Admin;