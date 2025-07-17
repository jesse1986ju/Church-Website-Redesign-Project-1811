import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { 
  FiUpload, FiSearch, FiFilter, FiImage, FiFile, FiGrid, 
  FiList, FiTrash2, FiDownload, FiEdit, FiCopy, FiCheck
} = FiIcons;

const MediaLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [selectedItems, setSelectedItems] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);
  
  // Mock media data for demo purposes
  const mediaItems = [
    {
      id: 1,
      name: 'church-exterior.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1438032005730-c779502df39b',
      size: '1.2 MB',
      dimensions: '1920 x 1080',
      uploadedAt: '2024-05-10',
      uploadedBy: 'Admin'
    },
    {
      id: 2,
      name: 'sunday-service.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1507692049790-de58290a4334',
      size: '856 KB',
      dimensions: '1600 x 900',
      uploadedAt: '2024-05-08',
      uploadedBy: 'Admin'
    },
    {
      id: 3,
      name: 'youth-group.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
      size: '945 KB',
      dimensions: '1800 x 1200',
      uploadedAt: '2024-05-05',
      uploadedBy: 'Pastor John'
    },
    {
      id: 4,
      name: 'sermon-notes.pdf',
      type: 'document',
      url: '#',
      size: '342 KB',
      dimensions: 'N/A',
      uploadedAt: '2024-05-12',
      uploadedBy: 'Pastor Sarah'
    },
    {
      id: 5,
      name: 'worship-song.mp3',
      type: 'audio',
      url: '#',
      size: '4.8 MB',
      dimensions: 'N/A',
      uploadedAt: '2024-05-11',
      uploadedBy: 'Worship Leader'
    },
    {
      id: 6,
      name: 'bible-study.jpg',
      type: 'image',
      url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
      size: '768 KB',
      dimensions: '1600 x 900',
      uploadedAt: '2024-05-09',
      uploadedBy: 'Admin'
    }
  ];
  
  // Filter media items
  const filteredItems = mediaItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    
    return matchesSearch && matchesType;
  });
  
  // Handle file upload
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    // Simulate file upload
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };
  
  // Handle item selection
  const toggleItemSelection = (id) => {
    setSelectedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  
  // Handle bulk actions
  const handleBulkDelete = () => {
    if (selectedItems.length === 0) return;
    
    // Confirm deletion
    if (window.confirm(`Are you sure you want to delete ${selectedItems.length} items?`)) {
      // This would normally delete from Supabase
      console.log('Deleting items:', selectedItems);
      setSelectedItems([]);
    }
  };
  
  return (
    <div className="flex-1 pl-64">
      <main className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-sf font-bold text-gray-900">Media Library</h1>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handleUploadClick}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <SafeIcon icon={FiUpload} className="w-5 h-5 mr-2" />
              Upload
            </button>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              multiple
            />
          </div>
        </div>
        
        {/* Upload Progress */}
        {isUploading && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-blue-50 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <SafeIcon icon={FiUpload} className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-blue-800 font-medium">Uploading files...</span>
              </div>
              <span className="text-blue-800">{uploadProgress}%</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          </motion.div>
        )}
        
        {/* Filters and View Controls */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0">
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
                placeholder="Search media..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-4 md:ml-4">
              {/* Type Filter */}
              <div className="min-w-40">
                <div className="flex items-center">
                  <SafeIcon
                    icon={FiFilter}
                    className="text-gray-400 w-5 h-5 mr-2"
                  />
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full border-none focus:ring-0 text-sm font-medium"
                  >
                    <option value="all">All Types</option>
                    <option value="image">Images</option>
                    <option value="document">Documents</option>
                    <option value="audio">Audio</option>
                    <option value="video">Video</option>
                  </select>
                </div>
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'}`}
                >
                  <SafeIcon icon={FiGrid} className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-500'}`}
                >
                  <SafeIcon icon={FiList} className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bulk Actions */}
        {selectedItems.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-blue-50 rounded-lg p-3 mb-6 flex justify-between items-center"
          >
            <span className="text-blue-800 font-medium">{selectedItems.length} items selected</span>
            <div className="flex items-center space-x-2">
              <button 
                onClick={handleBulkDelete}
                className="inline-flex items-center px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md"
              >
                <SafeIcon icon={FiTrash2} className="w-4 h-4 mr-1" />
                Delete
              </button>
              
              <button 
                onClick={() => setSelectedItems([])}
                className="inline-flex items-center px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
              >
                Clear Selection
              </button>
            </div>
          </motion.div>
        )}
        
        {/* Media Items - Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 ${
                  selectedItems.includes(item.id) ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {/* Media Preview */}
                <div className="relative h-40 bg-gray-100">
                  {item.type === 'image' ? (
                    <img 
                      src={item.url} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <SafeIcon 
                        icon={item.type === 'document' ? FiFile : FiImage} 
                        className="w-12 h-12 text-gray-400"
                      />
                    </div>
                  )}
                  
                  {/* Selection Checkbox */}
                  <div 
                    className="absolute top-2 left-2"
                    onClick={() => toggleItemSelection(item.id)}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer ${
                      selectedItems.includes(item.id) 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-black/30 text-white hover:bg-black/50'
                    }`}>
                      {selectedItems.includes(item.id) && (
                        <SafeIcon icon={FiCheck} className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Media Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 truncate" title={item.name}>
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">{item.size}</span>
                    <span className="text-xs text-gray-500">{item.uploadedAt}</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="px-4 py-3 bg-gray-50 flex justify-between items-center border-t border-gray-100">
                  <div className="flex space-x-1">
                    <button className="p-1 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50">
                      <SafeIcon icon={FiEdit} className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50">
                      <SafeIcon icon={FiCopy} className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50">
                      <SafeIcon icon={FiDownload} className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="p-1 text-gray-500 hover:text-red-600 rounded-full hover:bg-red-50">
                    <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Media Items - List View */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="w-12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedItems(filteredItems.map(item => item.id));
                          } else {
                            setSelectedItems([]);
                          }
                        }}
                        checked={selectedItems.length === filteredItems.length && filteredItems.length > 0}
                      />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    File
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dimensions
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Uploaded
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredItems.map((item) => (
                  <tr 
                    key={item.id} 
                    className={`hover:bg-gray-50 ${selectedItems.includes(item.id) ? 'bg-blue-50' : ''}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => toggleItemSelection(item.id)}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          {item.type === 'image' ? (
                            <img className="h-10 w-10 object-cover rounded" src={item.url} alt="" />
                          ) : (
                            <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                              <SafeIcon 
                                icon={item.type === 'document' ? FiFile : FiImage} 
                                className="w-5 h-5 text-gray-400"
                              />
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">{item.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.size}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.dimensions}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{item.uploadedAt}</div>
                      <div className="text-xs">{item.uploadedBy}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="text-gray-600 hover:text-blue-600">
                          <SafeIcon icon={FiEdit} className="w-5 h-5" />
                        </button>
                        <button className="text-gray-600 hover:text-green-600">
                          <SafeIcon icon={FiDownload} className="w-5 h-5" />
                        </button>
                        <button className="text-gray-600 hover:text-red-600">
                          <SafeIcon icon={FiTrash2} className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {filteredItems.length === 0 && (
              <div className="py-10 text-center">
                <p className="text-gray-500">No media items match your search criteria</p>
              </div>
            )}
          </div>
        )}
        
        {/* Empty State */}
        {filteredItems.length === 0 && !searchTerm && (
          <div className="bg-white rounded-lg shadow-sm p-10 text-center">
            <SafeIcon icon={FiImage} className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No media items found</h3>
            <p className="text-gray-500 mb-6">Upload images, documents, and other media files to your library</p>
            <button
              onClick={handleUploadClick}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <SafeIcon icon={FiUpload} className="w-5 h-5 mr-2" />
              Upload Files
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MediaLibrary;