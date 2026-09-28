import React, { useState } from 'react';
import { Map as MapIcon } from 'lucide-react';

const CitizenReports = () => {
  const [activeTab, setActiveTab] = useState('Help Requests');
  const reports = [
    { id: 'CIT-001', type: 'Need Help', loc: 'Riverside Area', reported: '06 Sep 2025, 08:50 AM', status: 'Pending', color: 'yellow' },
    { id: 'CIT-002', type: 'I am Safe', loc: 'Market Road', reported: '06 Sep 2025, 09:12 AM', status: 'Received', color: 'green' },
    { id: 'CIT-003', type: 'I am Safe', loc: 'School Area', reported: '06 Sep 2025, 09:20 AM', status: 'Received', color: 'green' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Citizen Reports</h1>
        <p className="text-gray-500 text-sm">Help requests and safety confirmations from citizens</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
        {/* Table Section */}
        <div className="w-full lg:w-2/3 border-r border-gray-100 flex flex-col">
          <div className="p-4 border-b flex space-x-6">
            {['Help Requests (1)', 'I am Safe (2)', 'All Reports'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.split(' (')[0])}
                className={`pb-2 text-sm font-medium border-b-2 transition ${
                  activeTab === tab.split(' (')[0] ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                  <th className="p-4 font-medium">ID</th>
                  <th className="p-4 font-medium">Type</th>
                  <th className="p-4 font-medium">Location</th>
                  <th className="p-4 font-medium">Reported At</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {reports.map((r) => (
                  <tr key={r.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-4 font-medium text-gray-800">{r.id}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${r.type === 'Need Help' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {r.type}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{r.loc}</td>
                    <td className="p-4 text-gray-500">{r.reported}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${r.color}-100 text-${r.color}-700`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="p-4">
                      {r.type === 'Need Help' ? (
                        <div className="flex space-x-2">
                          <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-medium hover:bg-blue-200">Acknowledge</button>
                          <button className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-medium hover:bg-green-200">Resolve</button>
                        </div>
                      ) : (
                        <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium hover:bg-gray-200">View</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/3 p-5 bg-gray-50 flex flex-col">
          <h3 className="font-semibold text-gray-800 mb-4">Report Locations</h3>
          <div className="flex-1 bg-blue-50 rounded-lg relative overflow-hidden flex items-center justify-center border border-blue-100 min-h-[300px]">
             <div className="text-center relative z-10">
              <MapIcon size={48} className="text-blue-300 mx-auto mb-2" />
              <p className="text-blue-500 font-medium">Map View</p>
            </div>
            <div className="absolute top-1/3 left-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-lg">CIT-001</div>
            <div className="absolute bottom-1/3 right-1/4 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-lg">CIT-002</div>
          </div>
          <div className="flex space-x-4 mt-4 text-xs text-gray-600 justify-center">
            <div className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span><span>Help Request</span></div>
            <div className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-green-500"></span><span>Safe Report</span></div>
            <div className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span><span>Your Location</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenReports;