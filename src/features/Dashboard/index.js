import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Peaksaving from "./components/peakSaving/peakSaving";
import Sidenav from "./components/sidenav/sidenav";
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="sidenav_container">
        <Sidenav />
      </div>
      <div className="components_container">
        <Routes>
          <Route exact path={'/'} element={<Peaksaving />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
