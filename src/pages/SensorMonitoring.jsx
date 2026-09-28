import React from 'react';
import { Map as MapIcon, RefreshCw } from 'lucide-react';
import { useThingSpeakData } from '../hooks/useThingSpeak';
import { Badge } from '../components/ui/Badge';

const SensorMonitoring = () => {
  const { liveData, refetch, loading } = useThingSpeakData();
  
  // Exact data from the image
  const sensors = [
    { id: '01', location: 'Riverside', level: '2.8', rain: '12.4', status: 'Warning', color: 'yellow', battery: '78%' },
    { id: '02', location: 'Bridge', level: '1.2', rain: '3.1', status: 'Normal', color: 'green', battery: '92%' },
    { id: '03', location: 'Market', level: '4.1', rain: '28.7', status: 'Critical', color: 'red', battery: '65%' },
    { id: '04', location: 'Hospital', level: '0.9', rain: '1.2', status: 'Normal', color: 'green', battery: '88%' },
    { id: '05', location: 'School', level: '1.6', rain: '7.8', status: 'Normal', color: 'green', battery: '91%' },
  ];

  // If ThingSpeak data is available, we can optionally overwrite the first sensor's data
  if (liveData) {
    sensors[0].level = liveData.field1 ? liveData.field1.toFixed(1) : sensors[0].level;
    sensors[1].level = liveData.field2 ? liveData.field2.toFixed(1) : sensors[1].level;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Sensor Monitoring</h1>
          <p className="text-gray-500 text-sm">Live sensor data from all deployed nodes</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-lg border border-gray-200">
          <span>Last updated: 06 Sep 2025, 10:24 AM</span>
          <RefreshCw size={16} className={`cursor-pointer hover:text-gray-700 ${loading ? 'animate-spin' : ''}`} onClick={refetch} />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Table Section */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                  <th className="p-4 font-medium">Node ID</th>
                  <th className="p-4 font-medium">Location</th>
                  <th className="p-4 font-medium">Water Level (m)</th>
                  <th className="p-4 font-medium">Rainfall (mm)</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Battery</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {sensors.map((sensor) => (
                  <tr key={sensor.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-4 font-medium text-gray-800">{sensor.id}</td>
                    <td className="p-4 text-gray-600">{sensor.location}</td>
                    <td className="p-4 font-semibold text-gray-800">{sensor.level}</td>
                    <td className="p-4 text-gray-600">{sensor.rain}</td>
                    <td className="p-4">
                      <Badge variant={sensor.color}>{sensor.status}</Badge>
                    </td>
                    <td className="p-4 text-gray-600">{sensor.battery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
          <h3 className="font-semibold text-gray-800 mb-4">Sensor Locations</h3>
          <div className="flex-1 bg-blue-50 rounded-lg relative overflow-hidden flex items-center justify-center border border-blue-100 min-h-[300px]">
             <div className="text-center relative z-10">
              <MapIcon size={48} className="text-blue-300 mx-auto mb-2" />
              <p className="text-blue-500 font-medium">Map View</p>
            </div>
            <div className="absolute top-1/3 left-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-lg">Node 03</div>
            <div className="absolute top-1/4 left-1/4 bg-yellow-500 text-white text-xs px-2 py-1 rounded shadow-lg">Node 01</div>
            <div className="absolute bottom-1/3 right-1/4 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-lg">Node 02</div>
          </div>
          <div className="flex space-x-4 mt-4 text-xs text-gray-600 justify-center">
            <div className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-green-500"></span><span>Normal</span></div>
            <div className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span><span>Warning</span></div>
            <div className="flex items-center space-x-1"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span><span>Critical</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorMonitoring;