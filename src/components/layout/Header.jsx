import React from 'react';
import { Bell, UserCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white h-16 border-b flex items-center justify-between px-8 sticky top-0 z-0">
      <div className="flex items-center text-gray-500">
        <h2 className="text-xl font-semibold text-gray-800">Authority Command Centre</h2>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative cursor-pointer">
          <Bell size={20} className="text-gray-500" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer border-l pl-6">
          <UserCircle size={32} className="text-gray-400" />
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-800">Officer 1</p>
            <p className="text-xs text-gray-500">Approving Officer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;