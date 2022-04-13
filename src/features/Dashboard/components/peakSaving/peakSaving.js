import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";
import Chart from "../chart/chart";
import "./peakSaving.css";
import Createalert from "../createAlert/createAlert";
import Datatable from "../dataTable/datatable";

const Peaksaving = () => {
  return (
    <div className="peak_container">
      <div className="peak_header">
        <div className="peak_header_wrapper">
          <span>Peak Shaving & Alert</span>
          <span>
            Carlsberg Group{" "}
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneIcon />
            </Badge>
          </span>
        </div>
      </div>
      <div className="data_warpper">
        <div className="chart_container">
          <Chart />
        </div>
        <div className="bottom_container">
          <div className="alert_container"><Createalert/></div>
          <div className="table_container"><Datatable/></div>
        </div>
      </div>
    </div>
  );
};

export default Peaksaving;
