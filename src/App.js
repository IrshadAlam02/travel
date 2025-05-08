// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './Components/FrontPage';
import Dashboard from './Components/Dashboard/Dashboard';
import Profile from './Components/Dashboard/Profile';


const App = () => {

  const [isDark, setDark] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage isDark={isDark} setDark={setDark}/>} />
        <Route path="Dashboard" element={<Dashboard isDark={isDark} setDark={setDark} />} />
        <Route path="Profile" element={<Profile isDark={isDark} />} />

   
      </Routes>
    </Router>
  );
};

export default App;

