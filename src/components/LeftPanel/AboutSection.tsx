"use client"
import React, { useState } from 'react';

interface AboutSectionProps {
  onChange: (field: string, value: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onChange }) => {
  return (
    <div className="section">
      <h3>About</h3>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => onChange('name', e.target.value)}
      />
      <input
        type="text"
        placeholder="Number"
        onChange={(e) => onChange('number', e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => onChange('address', e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => onChange('email', e.target.value)}
      />
      {/* Add social accounts */}
      {/* Example: */}
      <input
        type="text"
        placeholder="LinkedIn"
        onChange={(e) => onChange('linkedin', e.target.value)}
      />
      <button onClick={() => {/* Add custom social account functionality */}}>
        Add Custom Account
      </button>
    </div>
  );
};

export default AboutSection;
