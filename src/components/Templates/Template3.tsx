// src/components/Templates/Template3.tsx
import React from 'react';

const Template3: React.FC<{ data: any }> = ({ data }) => {
  return (
    <div className="p-4 border border-gray-600 bg-gray-200">
      <h1 className="text-4xl font-bold text-green-600">{data.name}</h1>
      <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
      <p className="text-gray-700">{data.address} | {data.number} | {data.email}</p>
      
      <h3 className="text-xl font-bold mt-4">Summary</h3>
      <p>{data.summary}</p>

      <h3 className="text-xl font-bold mt-4">Work Experience</h3>
      <ul>
        {data.experience.map((exp: string, index: number) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mt-4">Core Skills</h3>
      <ul>
        {data.skills.map((skill: string, index: number) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Template3;
