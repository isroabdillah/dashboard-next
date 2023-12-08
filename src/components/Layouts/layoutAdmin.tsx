import React, { ReactNode } from 'react';
import { Sidebar } from '../Sidebar';
import { Topbar } from '../Topbar';

interface LayoutAdminProps {
  children: ReactNode;
}

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="ml-64 space-y-14">
        <Topbar />
        {children}
      </main>
    </>
  );
};

export default LayoutAdmin;
