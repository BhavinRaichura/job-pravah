import React from "react";
import "@/app/globals.css";
import AuthenticateAdmin from "@/components/base/AuthenticateAdmin";
import DashboardMain from "@/components/ui/adminDashboard/DashboardMain";

export const metadata = {
  title: "Admin",
};

const Layout = ({ children }) => {
  return (
    <div>
      {/*<AuthenticateAdmin>*/}
        
        <div className="w-full flex">
          <DashboardMain>
            {children}
          </DashboardMain>
        </ div>
      {/*</AuthenticateAdmin>*/}
    </div>
  );
};

export default Layout;
