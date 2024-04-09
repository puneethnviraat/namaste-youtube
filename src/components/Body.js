import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="grid-cols-12 grid gap-4">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
