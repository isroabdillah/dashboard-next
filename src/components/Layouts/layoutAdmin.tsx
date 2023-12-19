import React, { ReactNode } from 'react';
import { Sidebar } from '../Sidebar';
import { Topbar } from '../Topbar';
import SideNav from '../Sidebar/sidenav';

interface LayoutAdminProps {
  children: ReactNode;
}

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      {/* <SideNav/> */}
      <main className="lg:ml-64 space-y-6">
        <Topbar />
        {children}
      </main>
    </>
  );
};

export default LayoutAdmin;
