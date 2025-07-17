import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import PagesList from './PagesList';
import WysiwygEditor from './WysiwygEditor';

const { 
  FiArrowLeft, FiSave, FiEye, FiTrash, FiInfo,
  FiImage, FiTag, FiCalendar, FiGrid, FiLink, FiLayout
} = FiIcons;

const PageEditor = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const isNewPage = !pageId || pageId === 'new';
  
  // State for page content
  const [page, setPage] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    featuredImage: '',
    status: 'draft',
    category: '',
    template: 'default',
    metaTitle: '',
    metaDescription: '',
    publishDate: new Date().toISOString().split('T')[0]
  });

  // State for UI
  const [activeTab, setActiveTab] = useState('content');
  const [isSaving, setIsSaving] = useState(false);
  const [showPagesList, setShowPagesList] = useState(!pageId);
  
  // Fetch page data if editing existing page
  useEffect(() => {
    if (pageId && pageId !== 'new') {
      // This would normally fetch from Supabase
      // For demo purposes, we'll use mock data
      const mockPage = {
        id: pageId,
        title: 'Sample Page',
        slug: 'sample-page',
        content: '<h2>Welcome to our church</h2><p>This is a sample page content with <strong>rich text</strong> formatting.</p>',
        excerpt: 'A brief description of the page for listings and SEO.',
        featuredImage: 'https://images.unsplash.com/photo-1438032005730-c779502df39b',
        status: 'published',
        category: 'general',
        template: 'default',
        metaTitle: 'Sample Page | Lifeline Ministry',
        metaDescription: 'Learn about our church community and ministries.',
        publishDate: '2024-05-15'
      };
      
      setPage(mockPage);
      setShowPagesList(false);
    }
  }, [pageId]);

  // Generate slug from title
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setPage(prev => {
      // Auto-generate slug when title changes if slug is empty
      if (name === 'title' && (!prev.slug || prev.slug === generateSlug(prev.title))) {
        return { ...prev, [name]: value, slug: generateSlug(value) };
      }
      return { ...prev, [name]: value };
    });
  };

  // Handle rich text editor content change
  const handleContentChange = (content) => {
    setPage(prev => ({ ...prev, content }));
  };

  // Handle save
  const handleSave = async (status = page.status) => {
    setIsSaving(true);
    
    try {
      // Update status if provided
      const updatedPage = { ...page, status };
      
      // This would normally save to Supabase
      console.log('Saving page:', updatedPage);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update page with saved data (would normally come from API response)
      setPage(updatedPage);
      
      // Show success message or redirect
      if (isNewPage) {
        navigate('/admin/pages/1'); // Redirect to the new page's edit screen
      }
      
      alert(`Page ${status === 'published' ? 'published' : 'saved'} successfully!`);
    } catch (error) {
      console.error('Error saving page:', error);
      alert('Error saving page. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  // If showing pages list, render that instead
  if (showPagesList) {
    return <PagesList onNewPage={() => navigate('/admin/pages/new')} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Editor content */}
      <div className="flex-1 pl-64">
        <main className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/admin')} 
                className="mr-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
              </button>
              <h1 className="text-2xl font-sf font-bold text-gray-900">
                {isNewPage ? 'Create New Page' : 'Edit Page'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link 
                to={`/${page.slug}`} 
                target="_blank"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <SafeIcon icon={FiEye} className="w-4 h-4 mr-2" />
                Preview
              </Link>
              
              <button 
                onClick={() => handleSave('draft')} 
                disabled={isSaving}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <SafeIcon icon={FiSave} className="w-4 h-4 mr-2" />
                Save Draft
              </button>
              
              <button 
                onClick={() => handleSave('published')} 
                disabled={isSaving}
                className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-colors"
              >
                {page.status === 'published' ? 'Update' : 'Publish'}
              </button>
            </div>
          </div>

          {/* Editor Tabs */}
          <div className="bg-white rounded-t-xl shadow-sm">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  className={`px-6 py-3 text-sm font-medium border-b-2 ${
                    activeTab === 'content'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('content')}
                >
                  Content
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium border-b-2 ${
                    activeTab === 'seo'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('seo')}
                >
                  SEO
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium border-b-2 ${
                    activeTab === 'settings'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('settings')}
                >
                  Settings
                </button>
              </nav>
            </div>

            {/* Content Tab */}
            {activeTab === 'content' && (
              <div className="p-6">
                <div className="mb-6">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Page Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    value={page.title}
                    onChange={handleInputChange}
                    placeholder="Enter page title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                    Excerpt
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={page.excerpt}
                    onChange={handleInputChange}
                    placeholder="Brief description of this page"
                    rows={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content
                  </label>
                  <WysiwygEditor 
                    initialContent={page.content} 
                    onChange={handleContentChange} 
                  />
                </div>
              </div>
            )}

            {/* SEO Tab */}
            {activeTab === 'seo' && (
              <div className="p-6 space-y-6">
                <div>
                  <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    SEO Title
                  </label>
                  <input
                    id="metaTitle"
                    type="text"
                    name="metaTitle"
                    value={page.metaTitle}
                    onChange={handleInputChange}
                    placeholder="SEO title (displayed in search results)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Recommended length: 50-60 characters
                  </p>
                </div>
                
                <div>
                  <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Meta Description
                  </label>
                  <textarea
                    id="metaDescription"
                    name="metaDescription"
                    value={page.metaDescription}
                    onChange={handleInputChange}
                    placeholder="Brief description for search engines"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Recommended length: 150-160 characters
                  </p>
                </div>
                
                <div>
                  <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                    URL Slug
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-gray-100 text-gray-500 border border-r-0 border-gray-300 rounded-l-lg">
                      {window.location.origin}/
                    </span>
                    <input
                      id="slug"
                      type="text"
                      name="slug"
                      value={page.slug}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex">
                    <SafeIcon icon={FiInfo} className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-blue-800">SEO Preview</h3>
                      <p className="text-sm text-blue-700 mt-1">
                        This is how your page might appear in search engine results.
                      </p>
                      <div className="mt-3 p-3 bg-white rounded border border-blue-200">
                        <p className="text-blue-600 text-lg font-medium truncate">
                          {page.metaTitle || page.title || 'Page Title'}
                        </p>
                        <p className="text-green-700 text-sm">
                          {window.location.origin}/{page.slug || 'page-url'}
                        </p>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                          {page.metaDescription || page.excerpt || 'Page description will appear here. Make sure to add a meta description for better SEO.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={page.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="publishDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Publish Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SafeIcon icon={FiCalendar} className="text-gray-400 w-5 h-5" />
                    </div>
                    <input
                      id="publishDate"
                      type="date"
                      name="publishDate"
                      value={page.publishDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SafeIcon icon={FiTag} className="text-gray-400 w-5 h-5" />
                    </div>
                    <select
                      id="category"
                      name="category"
                      value={page.category}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      <option value="general">General</option>
                      <option value="sermon">Sermon</option>
                      <option value="event">Event</option>
                      <option value="ministry">Ministry</option>
                      <option value="news">News</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="template" className="block text-sm font-medium text-gray-700 mb-1">
                    Page Template
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SafeIcon icon={FiLayout} className="text-gray-400 w-5 h-5" />
                    </div>
                    <select
                      id="template"
                      name="template"
                      value={page.template}
                      onChange={handleInputChange}
                      className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="default">Default</option>
                      <option value="full-width">Full Width</option>
                      <option value="sidebar">With Sidebar</option>
                      <option value="landing">Landing Page</option>
                    </select>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">
                    Featured Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    {page.featuredImage ? (
                      <div>
                        <img 
                          src={page.featuredImage} 
                          alt="Featured" 
                          className="h-48 object-cover mx-auto rounded-lg mb-3" 
                        />
                        <button className="text-sm text-red-600 hover:text-red-700">
                          Remove Image
                        </button>
                      </div>
                    ) : (
                      <div>
                        <SafeIcon icon={FiImage} className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 mb-2">Drag and drop an image here, or</p>
                        <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors">
                          Select from media library
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Danger Zone</h3>
                    <div className="h-px bg-red-100 flex-1 mx-4"></div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 mt-3">
                    <p className="text-red-700 text-sm mb-3">
                      Deleting a page removes it permanently. This action cannot be undone.
                    </p>
                    <button className="inline-flex items-center px-4 py-2 bg-white border border-red-600 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                      <SafeIcon icon={FiTrash} className="w-4 h-4 mr-2" />
                      Delete Page
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageEditor;