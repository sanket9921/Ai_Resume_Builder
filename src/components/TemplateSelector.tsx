// src/components/ResumeTemplateSelector.tsx
import { useState } from 'react';

interface TemplateSelectorProps {
  onSelectTemplate: (template: string) => void;
}

const ResumeTemplateSelector = ({ onSelectTemplate }: TemplateSelectorProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('Template1');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTemplate = event.target.value;
    setSelectedTemplate(newTemplate);
    onSelectTemplate(newTemplate);
  };

  return (
    <div className="template-selector">
      <label htmlFor="template-select">Select Template:</label>
      <select id="template-select" value={selectedTemplate} onChange={handleChange}>
        <option value="Template1">Template 1</option>
        <option value="Template2">Template 2</option>
        {/* Add more options here as templates are added */}
      </select>
    </div>
  );
};

export default ResumeTemplateSelector;
