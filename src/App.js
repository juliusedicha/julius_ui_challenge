import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

import Report from './components/Report';
import Setting from './components/Setting';
import Statistic from './components/Statistic';
import Flight from './components/Flight';
import Wallet from './components/Wallet';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app"> 
        <Sidebar />
        <main>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<Report />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/statistic" element={<Statistic />} />
            <Route path="/flight" element={<Flight />} />
            <Route path="/wallet" element={<Wallet />} />
          
            <Route index element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
