import React, { useState } from 'react';
import { Filter } from 'lucide-react';

const AlertApprovals = () => {
  const [activeTab, setActiveTab] = useState('Pending');
  const [selectedAlert, setSelectedAlert] = useState({
    id: 'AL-001', location: 'Riverside Area', risk: 'High', detected: '06 Sep 2025, 08:42 AM', readings: 'Water: 4.1 m / Rain: 28.7 mm'
  });

  const alerts = [
    { id: 'AL-001', location: 'Riverside Area', risk: 'High', detected: '06 Sep 2025, 08:42 AM', readings: 'Water: 4.1 m / Rain: 28.7 mm', color: 'red' },
    { id: 'AL-002', location: 'Market Road', risk: 'Medium', detected: '06 Sep 2025, 09:15 AM', readings: 'Water: 2.3 m / Rain: 12.4 mm', color: 'yellow' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Alert Approvals</h1>
        <p className="text-gray-500 text-sm">Review and approve flood alerts from sensor data</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        {/* Left List Panel */}
        <div className="w-full lg:w-1/2 border-r border-gray-100 flex flex-col">
          <div className="p-4 border-b flex space-x-6 justify-between items-center">
            <div className="flex space-x-6">
              {['Pending (2)', 'Approved (1)', 'Rejected (0)'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.split(' ')[0])}
                  className={`pb-2 text-sm font-medium border-b-2 transition ${
                    activeTab === tab.split(' ')[0] ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button className="flex items-center space-x-1 text-sm text-gray-500 border border-gray-200 px-3 py-1 rounded">
              <Filter size={14} /> <span>Filter</span>
            </button>
          </div>
          <div className="p-4 space-y-4 flex-1 overflow-y-auto">
            {alerts.map((alert) => (
              <div 
                key={alert.id} 
                onClick={() => setSelectedAlert(alert)}
                className={`border rounded-lg p-4 cursor-pointer hover:border-blue-300 hover:shadow-md transition ${selectedAlert.id === alert.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-gray-800">{alert.id}</span>
                  <span className={`px-2 py-0.5 rounded text-xs font-semibold ${alert.risk === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {alert.risk}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700">{alert.location}</p>
                <p className="text-xs text-gray-500 mt-1">Detected At: {alert.detected}</p>
                <p className="text-xs text-gray-500 mt-1">Readings: {alert.readings}</p>
                <div className="flex space-x-2 mt-4">
                  <button className="flex-1 bg-green-500 text-white py-1.5 rounded text-sm font-medium hover:bg-green-600">Approve</button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-1.5 rounded text-sm font-medium hover:bg-gray-200">Modify</button>
                  <button className="flex-1 bg-red-100 text-red-700 py-1.5 rounded text-sm font-medium hover:bg-red-200">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Detail Panel */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col bg-gray-50">
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Location: {selectedAlert.location}</h3>
              <p className="text-sm text-gray-700">Lat: 10.7642, Long: 76.6971</p>
              <div className="mt-3 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                <span className="relative z-10">Map Preview Image</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Recommended Action</h3>
              <p className="text-sm text-gray-800">Evacuate low-lying areas. Avoid Riverside road.</p>
              <p className="text-sm text-gray-800 mt-2"><strong>Suggested Shelter:</strong> Riverside Community Shelter (1.2 km)</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Notes (Optional)</h3>
              <textarea className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-blue-500 focus:border-blue-500" rows="3" placeholder="Add your remarks..."></textarea>
            </div>
          </div>
          
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md">
            Submit Decision
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertApprovals;