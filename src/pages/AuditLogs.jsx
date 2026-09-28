import React from 'react';
import { Download } from 'lucide-react';

const AuditLogs = () => {
  const logs = [
    { time: '06 Sep 2025, 09:18 AM', user: 'Officer 1', action: 'Alert Approved', details: 'AL-001 - Riverside Area' },
    { time: '06 Sep 2025, 09:12 AM', user: 'Officer 2', action: 'Shelter Updated', details: 'S002 - Town Hall (Capacity: 150)' },
    { time: '06 Sep 2025, 08:45 AM', user: 'Field Operator', action: 'Sensor Reading', details: 'Node 01 - Water Level: 2.8 m' },
    { time: '06 Sep 2025, 08:32 AM', user: 'Officer 1', action: 'Alert Modified', details: 'AL-002 - Market Road' },
    { time: '06 Sep 2025, 07:50 AM', user: 'Citizen', action: 'Help Request', details: 'CIT-001 - Riverside Area' },
    { time: '06 Sep 2025, 07:20 AM', user: 'Officer 2', action: 'Report Generated', details: 'Daily Sensor Report' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Audit Logs & Reports</h1>
          <p className="text-gray-500 text-sm">Track all actions and generate reports</p>
        </div>
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 bg-white">
            <option>01 Sep 2025 - 06 Sep 2025</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition whitespace-nowrap">
            <Download size={16} />
            <span>Download Report</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                <th className="p-4 font-medium">Time</th>
                <th className="p-4 font-medium">User</th>
                <th className="p-4 font-medium">Action</th>
                <th className="p-4 font-medium">Details</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {logs.map((log, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4 text-gray-600">{log.time}</td>
                  <td className="p-4 font-medium text-gray-800">{log.user}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      log.action.includes('Approved') ? 'bg-green-100 text-green-700' :
                      log.action.includes('Modified') ? 'bg-yellow-100 text-yellow-700' :
                      log.action.includes('Help') ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{log.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;