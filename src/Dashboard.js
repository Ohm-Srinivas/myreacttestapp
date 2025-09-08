import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';
// ✅ Place this at the very top of Dashboard.js (after your other imports)
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';




const Dashboard = () => {
  const [activePage, setActivePage] = useState('Bikes');

  // ✅ Declare the chart data here
  const barData = [
    { name: 'Jan', users: 200 },
    { name: 'Feb', users: 300 },
    { name: 'Mar', users: 400 },
    { name: 'Apr', users: 500 },
  ];

  const pieData = [
    { name: 'Sold', value: 45 },
    { name: 'Inventory', value: 150 },
    { name: 'Ready to sell', value: 30 },
  ];

  const COLORS = ['#83fe00ff', '#ead810ff', '#1509f4ff'];



  const renderContent = () => {
    switch (activePage) {
      case 'Bikes':
        return <div><h2>Royal Enfield</h2><p>This is the overview content.</p>
               
        <div style={{ display: 'flex', gap: '20px' }}>
        {/* Card 1 */}
        <div style={{ textAlign: 'center', width: '300px' }}>
          <h4>Royal Enfield Hunter 350</h4>
          <img src="/RE1.avif" alt="Bike1" width="300" />
          <p style={{ textAlign: 'left' }}>
            <ul style={{ textAlign: 'left', listStyleType: 'disc', paddingLeft: '20px' }}>
     <li><strong>Lightest Royal Enfield:</strong> The smallest and lightest bike the company makes.<br /></li>
     <li><strong>Target Audience:</strong> Designed for younger riders and first-time bike buyers.<br /></li>
     <li><strong>Engine:</strong> 349cc single-cylinder air-cooled motor, shared with the Classic 350 and Meteor 350.<br /></li>
     <li><strong>Wheels:</strong> Only Royal Enfield with 17-inch wheels at both ends — ideal for city riding.<br /></li>
     <li><strong>Design:</strong> Fresh and youthful colour schemes unlike the classic paint jobs on other RE bikes.<br /></li>
     <li><strong>Features:</strong> Dual-channel ABS, semi-digital console, and RE’s Tripper Pod for navigation.</li>
    </ul>
  </p>
        </div>

        {/* Card 2 */}
        <div style={{ textAlign: 'center', width: '300px' }}>
          <h4>Royal Enfield Shotgun 650</h4>
          <img src="/RE2.avif" alt="Bike2" width="300" />
          <p>The Royal Enfield Shotgun 650 is a bobber based on the manufacturer's 650cc, twin-cylinder platform. The slash-cut exhaust along with the chopped rear fender and the single-seat gives it the true blue bobber appeal.</p>
        </div>

        {/* Card 3 */}
        <div style={{ textAlign: 'center', width: '300px' }}>
          <h4>Royal Enfield Continental GT 650</h4>
          <img src="/RE3.avif" alt="Bike3" width="300" />
          <p>The Royal Enfield Continental GT is a retro cafe-racer built on the company’s 650cc twin-cylinder platform. It looks like a proper cafe-racer bike from the 1970s with a slim tank and a sporty riding position. It also offers enough performance to match its old-school sporty looks.</p>
        </div>
      </div>
      </div>;



      case 'profile':
        return (
        
        <div className="profile-container">
            <h2>Owner Details</h2>
            <div className="profile-content">
                <img 
                    src="omsrinivas.jpg" 
                    alt="Your Profile" 
                    className="profile-image" 
                />
                <div className="profile-details">
                    <p><strong>Name:</strong> Arepalli Om Srinivas</p>
                    <p><strong>Age:</strong> 25</p>
                    <p><strong>ID:</strong> 20485A0337</p>
                    <p><strong>Description:</strong> A passionate software developer with a love for creating interactive web applications.</p>
                </div>
            </div>
        </div>
        );




      case 'analytics':
  return (
    <div>
      <h2>Analytics</h2>
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Bar Chart */}
        <div style={{ width: '50%', minWidth: '1000px', height: '200px' }}>
          <h4>Selling count monthly</h4>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#17e487ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div style={{ width: '45%', minWidth: '300px', height: '300px' }}>
          <h4>Stocks</h4>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );


      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container" style={{ display: 'flex' }}>
      <Sidebar onSelect={setActivePage} activePage={activePage} />
      <div className="content" style={{ marginLeft: '20px', padding: '10px' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
