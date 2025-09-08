import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Registration from './Registration';
import Support from './Support';
import ContactUs from './ContactUs';
import IDCard from './IDCard';
import Test2 from './Test2';

// Test2 option components
import Option1 from "./Test2/Option1";
import Option2 from "./Test2/Option2";
import Option3 from "./Test2/Option3";
import Option4 from "./Test2/Option4";
import Option5 from "./Test2/Option5";
import Option6 from "./Test2/Option6";

function App() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/IDCard" element={<IDCard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/test2" element={<Test2 />} />

          {/* Test2 Options */}
        <Route path="/Test2/option1" element={<Option1 />} />
        <Route path="/test2/option2" element={<Option2 />} />
        <Route path="/test2/option3" element={<Option3 />} />
        <Route path="/test2/option4" element={<Option4 />} />
        <Route path="/test2/option5" element={<Option5 />} />
        <Route path="/test2/option6" element={<Option6 />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
