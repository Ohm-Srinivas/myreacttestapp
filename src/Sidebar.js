import React from 'react';
import './Dashboard.css';

const Sidebar = ({ onSelect, activePage }) => {
  return (
    <div className="sidebar">
      <h2>Admin Om Srinivas</h2>
      <ul>
        <li 
          className={activePage === 'Bikes' ? 'active' : ''}
          onClick={() => onSelect('Bikes')}
        >
          Bikes
        </li>
        <li
          className={activePage === 'profile' ? 'active' : ''}
          onClick={() => onSelect('profile')}
        >
          Profile
        </li>
        <li
          className={activePage === 'analytics' ? 'active' : ''}
          onClick={() => onSelect('analytics')}
        >
          Analytics
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
