"use client";

import React, { ReactNode, useState } from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

interface LayoutAdminProps {
  children: ReactNode;
}

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ children }) => {
  const [collapsed, setSidebarCollapsed] = useState(true);

  return (
    <>
      <Sidebar
        collapsed={collapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      <main className="w-full space-y-6">
        <Topbar
          collapsed={collapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />
        {children}
      </main>
    </>
  );
};

export default LayoutAdmin;