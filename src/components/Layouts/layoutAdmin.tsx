"use client";

import React, { ReactNode, useState } from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { Footers } from "../Footers/footers";

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
      <div
        className={`${
          collapsed ? "md:w-[calc(100%_-_15rem)]" : "md:w-[calc(100%_-_5rem)]"
        } w-full space-y-6 min-h-screen flex flex-col justify-between`}
      >
        <main>
          <Topbar
            collapsed={collapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
          {children}
        </main>
        <Footers />
      </div>
    </div>
  );
};

export default LayoutAdmin;
