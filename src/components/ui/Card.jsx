import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-100 ${className}`}>{children}</div>
);

export const DashboardCard = ({ title, value, subtitle, icon, color }) => (
  <Card className="p-5 flex items-start justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      <p className="text-xs text-gray-400 mt-2">{subtitle}</p>
    </div>
    <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
      {React.cloneElement(icon, { className: `${color.replace('bg-', 'text-')}` })}
    </div>
  </Card>
);