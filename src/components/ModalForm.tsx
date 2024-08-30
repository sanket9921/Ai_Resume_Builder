import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExperience, addProject, addEducation } from '@/stores/slices/resumeSlice';

interface ModalFormProps {
  type: 'experience' | 'project' | 'education';
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ type, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: '', company: '', startDate: '', endDate: '', description: '' });

  const handleSubmit = () => {
    if (type === 'experience') {
      dispatch(addExperience(formData));
    } else if (type === 'project') {
      dispatch(addProject(formData));
    } else if (type === 'education') {
      dispatch(addEducation(formData));
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add {type}</h2>
        <input
          type="text"
          placeholder="Title / Company"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Start Date"
          value={formData.startDate}
          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          className="border p-2 mb-4 w-full"
        />
        {/* More inputs for end date, description, etc. */}
        <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSubmit}>
          Save
        </button>
        <button className="bg-red-500 text-white p-2 rounded ml-4" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
