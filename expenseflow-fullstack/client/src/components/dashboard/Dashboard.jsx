import React from "react";
import NavHeader from "../layout/Dashboard/Header/Header";

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-layout">
            <NavHeader />
        </div>
    )
}

export default DashboardLayout;