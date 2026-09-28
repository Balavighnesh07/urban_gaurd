import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Radio, AlertTriangle, Home, Users, Map, FileText, Settings } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Sensor Monitoring', path: '/sensors', icon: <Radio size={20} /> },
    { name: 'Alert Approvals', path: '/alerts', icon: <AlertTriangle size={20} />, badge: 2 },
    { name: 'Shelters', path: '/shelters', icon: <Home size={20} /> },
    { name: 'Citizen Reports', path: '/reports', icon: <Users size={20} />, badge: 3 },
    { name: 'Road Hazards', path: '/hazards', icon: <Map size={20} /> },
    { name: 'Reports & Logs', path: '/logs', icon: <FileText size={20} /> },
  ];

  return (
    <div className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen fixed left-0 top-0 overflow-y-auto z-10">
      <div className="p-6 flex items-center space-x-3 text-white">
        <div className="bg-blue-600 p-1.5 rounded-lg">
          <Home size={24} className="text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">FloodSafe</h1>
          <p className="text-xs text-slate-400">Authority Command Centre</p>
        </div>
      </div>
      <nav className="flex-1 mt-4">
        {navItems.map((item) => (
          <NavLink key={item.name} to={item.path} className={({ isActive }) => `flex items-center justify-between px-6 py-3 cursor-pointer transition-colors ${isActive ? 'bg-blue-800 text-white border-r-4 border-blue-500' : 'hover:bg-slate-800'}`}>
            <div className="flex items-center space-x-3">
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            {item.badge && <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">{item.badge}</span>}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <NavLink to="/settings" className={({ isActive }) => `flex items-center space-x-3 px-2 p-2 rounded-lg transition-colors ${isActive ? 'bg-slate-800 text-white' : 'hover:bg-slate-800'}`}>
          <Settings size={20} />
          <span className="text-sm font-medium">Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;