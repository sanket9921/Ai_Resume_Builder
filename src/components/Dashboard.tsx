"use client"
import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Include the CSS file for styling
import LeftPanel from './LeftPanel/LeftPanel';
import MiddleSection from './MiddlePanel';
import RightSection from './RightPanel';

const Dashboard: React.FC = () => {
  const [leftWidth, setLeftWidth] = useState<number>(0);
  const [rightWidth, setRightWidth] = useState<number>(0);

  useEffect(() => {
    // Initialize widths when the component mounts
    setLeftWidth(window.innerWidth / 4.5); // Smaller initial width
    setRightWidth(window.innerWidth / 4.5); // Smaller initial width
  }, []);

  const handleMouseMove = (event: MouseEvent, side: 'left' | 'right') => {
    if (side === 'left') {
      setLeftWidth(event.clientX);
    } else if (side === 'right') {
      setRightWidth(window.innerWidth - event.clientX);
    }
  };

  const handleMouseUp = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  };

  const handleMouseDown = (side: 'left' | 'right') => {
    document.onmousemove = (e) => handleMouseMove(e, side);
    document.onmouseup = handleMouseUp;
  };

  return (
    <div className="dashboard">
      <div className="left-panel" style={{ width: leftWidth }}>
        {/* Left panel content */}
        <LeftPanel/>
      </div>
      <div className="divider left-divider" onMouseDown={() => handleMouseDown('left')} />
      <div className="middle-panel">
        {/* Middle panel content */}
        <MiddleSection/>
      </div>
      <div className="divider right-divider" onMouseDown={() => handleMouseDown('right')} />
      <div className="right-panel" style={{ width: rightWidth }}>
        {/* Right panel content */}
        <RightSection/>
      </div>
    </div>
  );
};

export default Dashboard;
