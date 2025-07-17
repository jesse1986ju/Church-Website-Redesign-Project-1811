import React, { useState, useEffect } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {
  FiBold, FiItalic, FiLink, FiList, FiAlignLeft, FiAlignCenter,
  FiAlignRight, FiImage, FiVideo, FiCode, FiType, FiFileText
} = FiIcons;

const WysiwygEditor = ({ initialContent = '', onChange }) => {
  const [content, setContent] = useState(initialContent);
  const [editorMode, setEditorMode] = useState('visual'); // visual or html
  
  useEffect(() => {
    // Create a div to safely parse HTML
    const div = document.createElement('div');
    div.innerHTML = initialContent;
    setContent(initialContent);
  }, [initialContent]);
  
  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    onChange(newContent);
  };
  
  // This would normally integrate with a rich text editor library
  // For demo purposes, we're just showing a mock interface
  
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      {/* Editor Toolbar */}
      <div className="flex items-center justify-between p-2 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-1">
          {/* Format Options */}
          <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
            <SafeIcon icon={FiBold} className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
            <SafeIcon icon={FiItalic} className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
            <SafeIcon icon={FiLink} className="w-5 h-5" />
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          
          {/* Alignment */}
          <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
            <SafeIcon icon={FiAlignLeft} className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
            <SafeIcon icon={FiAlignCenter} className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
            <SafeIcon icon={FiAlignRight} className="w-5 h-5" />
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          
          {/* Lists */}
          <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
            <SafeIcon icon={FiList} className="w-5 h-5" />
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          
          {/* Media */}
          <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
            <SafeIcon icon={FiImage} className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
            <SafeIcon icon={FiVideo} className="w-5 h-5" />
          </button>
          
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          
          {/* Advanced */}
          <button className="p-2 text-gray-600 hover:bg-gray-200 rounded">
            <SafeIcon icon={FiCode} className="w-5 h-5" />
          </button>
        </div>
        
        <div>
          <div className="flex border border-gray-300 rounded overflow-hidden">
            <button
              className={`px-3 py-1 text-sm ${editorMode === 'visual' ? 'bg-white' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setEditorMode('visual')}
            >
              Visual
            </button>
            <button
              className={`px-3 py-1 text-sm ${editorMode === 'html' ? 'bg-white' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setEditorMode('html')}
            >
              HTML
            </button>
          </div>
        </div>
      </div>
      
      {/* Editor Content */}
      <div className="p-4 bg-white">
        {editorMode === 'visual' ? (
          <div 
            className="min-h-64 border border-gray-200 rounded-lg p-4 focus:outline-none"
            contentEditable={true}
            dangerouslySetInnerHTML={{ __html: content }}
            onBlur={(e) => onChange(e.currentTarget.innerHTML)}
            style={{ minHeight: '300px' }}
          />
        ) : (
          <textarea
            className="w-full min-h-64 border border-gray-200 rounded-lg p-4 font-mono text-sm"
            value={content}
            onChange={handleContentChange}
            style={{ minHeight: '300px' }}
          />
        )}
      </div>
      
      {/* Element Selector */}
      <div className="flex items-center p-2 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center mr-4">
          <SafeIcon icon={FiType} className="w-4 h-4 text-gray-500 mr-1" />
          <select className="text-sm border-none bg-transparent focus:outline-none text-gray-600">
            <option>Paragraph</option>
            <option>Heading 1</option>
            <option>Heading 2</option>
            <option>Heading 3</option>
            <option>Heading 4</option>
            <option>Preformatted</option>
          </select>
        </div>
        
        <div className="text-xs text-gray-500">
          <span>Words: {content.split(/\s+/).filter(Boolean).length}</span>
          <span className="mx-2">|</span>
          <span>Characters: {content.replace(/<[^>]*>/g, '').length}</span>
        </div>
      </div>
    </div>
  );
};

export default WysiwygEditor;