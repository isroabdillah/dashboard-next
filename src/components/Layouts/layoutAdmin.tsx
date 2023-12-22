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
    <div className="flex">
      <Sidebar
        collapsed={collapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      <main className={`${collapsed ? "md:w-[calc(100%_-_15rem)]" : "md:w-[calc(100%_-_5rem)]"} w-full space-y-6`}>
        <Topbar
          collapsed={collapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />
        {children}
      </main>
    </div>
  );
};

export default LayoutAdmin;