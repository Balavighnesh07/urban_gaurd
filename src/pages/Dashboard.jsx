import React from 'react';
import { Radio, AlertTriangle, Home, Users, Map as MapIcon, ArrowRight } from 'lucide-react';
import { DashboardCard } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useThingSpeakData } from '../hooks/useThingSpeak';

const Dashboard = () => {
  const { liveData } = useThingSpeakData();

  // Default values from the image
  const wl1 = liveData?.field1 || 2.8;
  const wl2 = liveData?.field2 || 1.2;
  const dist = liveData?.field6 || 4.1; // Using field6 as Market level in mock
  const code = liveData?.field7 || 1; // Warning

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 text-sm">Live overview of flood conditions and system status</p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard title="Sensor Nodes" value="05" subtitle="Online: 4 | Offline: 1" icon={<Radio size={24} />} color="bg-blue-500" />
        <DashboardCard title="Active Alerts" value="01" subtitle="Pending: 2 | Approved: 1" icon={<AlertTriangle size={24} />} color="bg-red-500" />
        <DashboardCard title="Shelters" value="03" subtitle="Open: 2 | Full: 1" icon={<Home size={24} />} color="bg-green-500" />
        <DashboardCard title="Citizen Reports" value="03" subtitle="Help: 1 | Safe: 2" icon={<Users size={24} />} color="bg-purple-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Live Map - Flood & Sensor Status</h3>
          <div className="bg-blue-50 h-[400px] rounded-lg relative overflow-hidden flex items-center justify-center border border-blue-100">
            <div className="text-center relative z-10">
              <MapIcon size={48} className="text-blue-300 mx-auto mb-2" />
              <p className="text-blue-500 font-medium">Interactive Map Integration</p>
              <p className="text-blue-400 text-sm">(Requires Leaflet / Mapbox setup)</p>
            </div>
            {/* Mock Pins */}
            <div className="absolute top-1/4 left-1/4 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-lg">Node 03</div>
            <div className="absolute top-1/2 left-1/3 bg-blue-500 text-white text-xs px-2 py-1 rounded shadow-lg">Node 01</div>
            <div className="absolute bottom-1/3 right-1/4 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-lg">Shelter</div>
          </div>
          <div className="flex space-x-6 mt-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2"><span className="w-3 h-3 rounded-full bg-blue-500"></span><span>Sensor Node</span></div>
            <div className="flex items-center space-x-2"><span className="w-3 h-3 rounded-full bg-red-500"></span><span>Flooded Road</span></div>
            <div className="flex items-center space-x-2"><span className="w-3 h-3 rounded-full bg-green-500"></span><span>Shelter</span></div>
            <div className="flex items-center space-x-2"><span className="w-3 h-3 bg-gray-400 h-0.5"></span><span>Normal Road</span></div>
          </div>
        </div>

        {/* Latest Readings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Latest Readings</h3>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">Node 01 - Riverside</p>
                <p className="text-sm text-gray-500">Water Level: {wl1.toFixed(1)} m</p>
              </div>
              <Badge variant="yellow">Warning</Badge>
            </div>
            <div className="border border-gray-100 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">Node 02 - Bridge</p>
                <p className="text-sm text-gray-500">Water Level: {wl2.toFixed(1)} m</p>
              </div>
              <Badge variant="green">Normal</Badge>
            </div>
            <div className="border border-gray-100 rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">Node 03 - Market</p>
                <p className="text-sm text-gray-500">Water Level: {dist.toFixed(1)} m</p>
              </div>
              <Badge variant="red">Critical</Badge>
            </div>
          </div>
          <button className="w-full mt-4 flex items-center justify-center space-x-2 text-blue-600 font-medium text-sm hover:text-blue-800 transition">
            <span>View All Sensors</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;