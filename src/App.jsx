import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import SensorMonitoring from './pages/SensorMonitoring';
import AlertApprovals from './pages/AlertApprovals';
import SheltersManagement from './pages/SheltersManagement';
import CitizenReports from './pages/CitizenReports';
import RoadHazards from './pages/RoadHazards';
import AuditLogs from './pages/AuditLogs';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ml-64 flex flex-col">
          <Header />
          <main className="p-8 flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sensors" element={<SensorMonitoring />} />
              <Route path="/alerts" element={<AlertApprovals />} />
              <Route path="/shelters" element={<SheltersManagement />} />
              <Route path="/reports" element={<CitizenReports />} />
              <Route path="/hazards" element={<RoadHazards />} />
              <Route path="/logs" element={<AuditLogs />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;