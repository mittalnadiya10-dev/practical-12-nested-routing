import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function OrdersLayout() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden font-sans">
      <div className="p-5 bg-slate-800 text-white">
        <h1 className="text-xl font-bold">E-Commerce Order Management</h1>
        <p className="text-slate-300 text-xs mt-0.5">Nested Routing with React Router Outlet</p>
      </div>

      <div className="border-b border-slate-200 bg-slate-50 px-5 flex space-x-5">
        <NavLink
          to="current"
          className={({ isActive }) =>
            `py-2.5 text-xs font-semibold border-b-2 transition ${
              isActive
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`
          }
        >
          Current Orders
        </NavLink>
        <NavLink
          to="history"
          className={({ isActive }) =>
            `py-2.5 text-xs font-semibold border-b-2 transition ${
              isActive
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`
          }
        >
          Order History
        </NavLink>
        <NavLink
          to="cancelled"
          className={({ isActive }) =>
            `py-2.5 text-xs font-semibold border-b-2 transition ${
              isActive
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`
          }
        >
          Cancelled Orders
        </NavLink>
      </div>

      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default OrdersLayout;
