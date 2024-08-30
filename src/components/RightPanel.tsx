import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTemplate } from '@/stores/slices/resumeSlice';
import './RightSection.css'; // Include styles for RightSection component

const templates = [
  { id: 'template1', name: 'Template 1' },
  { id: 'template2', name: 'Template 2' },
  // Add more templates as needed
];

const RightSection: React.FC = () => {
  const dispatch = useDispatch();
  const selectedTemplate = useSelector((state: any) => state.resume.template);

  const handleTemplateChange = (templateId: string) => {
    dispatch(setTemplate(templateId));
  };

  return (
    <div className="right-section">
      <h2>Select Resume Template</h2>
      <ul className="template-list">
        {templates.map((template) => (
          <li
            key={template.id}
            className={`template-item ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => handleTemplateChange(template.id)}
          >
            {template.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSection;
