import React from 'react';
import { Plus, Map as MapIcon } from 'lucide-react';

const SheltersManagement = () => {
  const shelters = [
    { id: 'S001', name: 'Riverside Community Shelter', loc: 'Riverside Road', cap: 200, avail: 120, status: 'Open', facilities: 'Food, Water, Toilets, Medical', updated: '06 Sep 2025, 08:30 AM' },
    { id: 'S002', name: 'Town Hall Shelter', loc: 'Main Street', cap: 150, avail: 0, status: 'Full', facilities: 'Food, Water, Toilets', updated: '06 Sep 2025, 07:15 AM' },
    { id: 'S003', name: 'School Shelter', loc: 'Green Street', cap: 100, avail: 75, status: 'Open', facilities: 'Food, Water, Toilets', updated: '06 Sep 2025, 09:00 AM' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Shelters Management</h1>
          <p className="text-gray-500 text-sm">Manage shelter information and availability</p>
        </div>
        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          <Plus size={16} />
          <span>Add Shelter</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Location</th>
                <th className="p-4 font-medium">Capacity</th>
                <th className="p-4 font-medium">Available</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Facilities</th>
                <th className="p-4 font-medium">Last Updated</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {shelters.map((s) => (
                <tr key={s.id} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-gray-800">{s.id}</td>
                  <td className="p-4 text-gray-800 font-medium">{s.name}</td>
                  <td className="p-4 text-gray-600">{s.loc}</td>
                  <td className="p-4 text-gray-600">{s.cap}</td>
                  <td className="p-4 text-gray-600">{s.avail}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${s.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{s.facilities}</td>
                  <td className="p-4 text-gray-500">{s.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border-t border-gray-100">
          <div className="bg-blue-50 rounded-lg p-4 relative min-h-[250px] flex items-center justify-center border border-blue-100">
            <div className="text-center">
              <MapIcon size={48} className="text-blue-300 mx-auto mb-2" />
              <p className="text-blue-500 font-medium">Shelter Map View</p>
            </div>
            {/* Mock Pins */}
            <div className="absolute top-1/4 left-1/4 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-lg">S001</div>
            <div className="absolute top-1/2 left-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-lg">S002</div>
            <div className="absolute bottom-1/4 right-1/4 bg-green-500 text-white text-xs px-2 py-1 rounded shadow-lg">S003</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">S001 - Riverside Community Shelter</h3>
              <p className="text-sm text-gray-600 mb-1">Capacity: 200 | Available: 120</p>
              <p className="text-sm text-gray-600">Facilities: Food, Water, Toilets, Medical</p>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheltersManagement;