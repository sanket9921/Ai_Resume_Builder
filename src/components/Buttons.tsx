"use client"
import React from 'react';

interface ButtonsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onDownload: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onZoomIn, onZoomOut, onReset, onDownload }) => {
  return (
    <div className="buttons">
      <button onClick={onZoomIn}>Zoom In</button>
      <button onClick={onZoomOut}>Zoom Out</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onDownload}>Download PDF</button>
    </div>
  );
};

export default Buttons;
