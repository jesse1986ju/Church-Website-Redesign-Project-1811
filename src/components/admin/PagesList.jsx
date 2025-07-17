import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { 
  FiPlus, FiEdit3, FiTrash2, FiEye, FiSearch, 
  FiFilter, FiChevronDown, FiChevronUp, FiMoreVertical
} = FiIcons;

const PagesList = ({ onNewPage }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortColumn, setSortColumn] = useState('updatedAt');
  const [sortDirection, setSortDirection] = useState('desc');
  
  // Mock data for demo purposes
  const pages = [
    { 
      id: 1, 
      title: 'Home Page', 
      slug: 'home', 
      status: 'published', 
      category: 'general',
      author: 'Admin',
      updatedAt: '2024-05-15',
      views: 1245
    },
    { 
      id: 2, 
      title: 'About Us', 
      slug: 'about-us', 
      status: 'published', 
      category: 'general',
      author: 'Admin',
      updatedAt: '2024-05-10',
      views: 543
    },
    { 
      id: 3, 
      title: 'Weekly Sermon: Faith in Action', 
      slug: 'sermon-faith-in-action', 
      status: 'published', 
      category: 'sermon',
      author: 'Pastor John',
      updatedAt: '2024-05-12',
      views: 328
    },
    { 
      id: 4, 
      title: 'Youth Retreat 2024', 
      slug: 'youth-retreat-2024', 
      status: 'draft', 
      category: 'event',
      author: 'Admin',
      updatedAt: '2024-05-14',
      views: 0
    },
    { 
      id: 5, 
      title: 'Summer Bible Study Series', 
      slug: 'summer-bible-study', 
      status: 'scheduled', 
      category: 'event',
      author: 'Pastor Sarah',
      updatedAt: '2024-05-13',
      views: 0
    }
  ];
  
  // Filter and sort pages
  const filteredPages = pages
    .filter(page => {
      // Apply search term filter
      const matchesSearch = page.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            page.slug.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Apply status filter
      const matchesStatus = statusFilter === 'all' || page.status === statusFilter;
      
      // Apply category filter
      const matchesCategory = categoryFilter === 'all' || page.category === categoryFilter;
      
      return matchesSearch && matchesStatus && matchesCategory;
    })
    .sort((a, b) => {
      // Apply sorting
      const factor = sortDirection === 'asc' ? 1 : -1;
      
      if (sortColumn === 'title') {
        return a.title.localeCompare(b.title) * factor;
      } else if (sortColumn === 'updatedAt') {
        return new Date(a.updatedAt) > new Date(b.updatedAt) ? factor : -factor;
      } else if (sortColumn === 'views') {
        return (a.views - b.views) * factor;
      }
      
      return 0;
    });
  
  const handleSort = (column) => {
    if (sortColumn === column) {
      // Toggle direction if same column
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new column and default to descending
      setSortColumn(column);
      setSortDirection('desc');
    }
  };

  return (
    <div className="flex-1 pl-64">
      <main className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-sf font-bold text-gray-900">Pages</h1>
          
          <button
            onClick={onNewPage}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <SafeIcon icon={FiPlus} className="w-5 h-5 mr-2" />
            New Page
          </button>
        </div>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Search */}
            <div className="flex-1 relative">
              <SafeIcon
                icon={FiSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search pages..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Status Filter */}
            <div className="min-w-40">
              <div className="flex items-center">
                <SafeIcon
                  icon={FiFilter}
                  className="text-gray-400 w-5 h-5 mr-2"
                />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full border-none focus:ring-0 text-sm font-medium"
                >
                  <option value="all">All Statuses</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="min-w-40">
              <div className="flex items-center">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full border-none focus:ring-0 text-sm font-medium"
                >
                  <option value="all">All Categories</option>
                  <option value="general">General</option>
                  <option value="sermon">Sermon</option>
                  <option value="event">Event</option>
                  <option value="ministry">Ministry</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pages Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('title')}
                  >
                    <div className="flex items-center">
                      <span>Title</span>
                      {sortColumn === 'title' && (
                        <SafeIcon
                          icon={sortDirection === 'asc' ? FiChevronUp : FiChevronDown}
                          className="w-4 h-4 ml-1"
                        />
                      )}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Author
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('updatedAt')}
                  >
                    <div className="flex items-center">
                      <span>Last Updated</span>
                      {sortColumn === 'updatedAt' && (
                        <SafeIcon
                          icon={sortDirection === 'asc' ? FiChevronUp : FiChevronDown}
                          className="w-4 h-4 ml-1"
                        />
                      )}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => handleSort('views')}
                  >
                    <div className="flex items-center">
                      <span>Views</span>
                      {sortColumn === 'views' && (
                        <SafeIcon
                          icon={sortDirection === 'asc' ? FiChevronUp : FiChevronDown}
                          className="w-4 h-4 ml-1"
                        />
                      )}
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPages.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{page.title}</div>
                      <div className="text-sm text-gray-500">/{page.slug}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        page.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : page.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                      }`}>
                        {page.status.charAt(0).toUpperCase() + page.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {page.category.charAt(0).toUpperCase() + page.category.slice(1)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{page.author}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{page.updatedAt}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {page.views}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <Link
                          to={`/admin/pages/${page.id}`}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit"
                        >
                          <SafeIcon icon={FiEdit3} className="w-5 h-5" />
                        </Link>
                        
                        <Link
                          to={`/${page.slug}`}
                          target="_blank"
                          className="text-gray-600 hover:text-gray-900"
                          title="View"
                        >
                          <SafeIcon icon={FiEye} className="w-5 h-5" />
                        </Link>
                        
                        <button
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <SafeIcon icon={FiTrash2} className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredPages.length === 0 && (
            <div className="py-10 text-center">
              <p className="text-gray-500">No pages match your search criteria</p>
            </div>
          )}
          
          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
            
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredPages.length}</span> of{' '}
                  <span className="font-medium">{filteredPages.length}</span> results
                </p>
              </div>
              
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <SafeIcon icon={FiChevronDown} className="h-5 w-5 rotate-90" />
                  </button>
                  
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    1
                  </button>
                  
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <SafeIcon icon={FiChevronDown} className="h-5 w-5 -rotate-90" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PagesList;