// src/components/RichTextEditor.tsx
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  return (
    <ReactQuill
    className='text-white'
      value={value} 
      onChange={onChange}
      modules={{
        toolbar: [
          [{ 'header': '1' }, { 'header': '2' }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['link', 'image'],
          [{ 'align': [] }],
          ['clean']
        ]
      }}
    />
  );
};

export default RichTextEditor;
