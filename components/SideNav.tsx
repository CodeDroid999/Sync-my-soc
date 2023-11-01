import React from 'react';

const SideNav: React.FC = () => {
  return (
    <div style={{ margin: 0 }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, width: '25%', backgroundColor: '#f1f1f1', position: 'fixed', height: '100%', overflow: 'auto' }}>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
  );
};

export default SideNav;
