import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyIcon from "@mui/icons-material/Key";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import HistoryIcon from '@mui/icons-material/History';
import BarChartIcon from '@mui/icons-material/BarChart';
import CellTowerIcon from '@mui/icons-material/CellTower';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import EvStationIcon from '@mui/icons-material/EvStation';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StadiumIcon from '@mui/icons-material/Stadium';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import "./sidenav.css";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../../actions/auth";

const ListItemStyle = { fontSize: '0.8rem' }

const Sidenav = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    dispatch(logoutUser(() => {
      navigate('/')
    }))
  }

  return (
    <div>
      <h4 className="sidenav_title">Grid Manager 2.0</h4>
      <hr />
      <div className="profile_component">
        <img
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          height={50}
          alt="profile"
          className="profile_image"
        />
        <span>
          <h5 className="sidenav_username">Hey, {user.name.first}</h5>
          <span className="side_nav_id">
            User Id: {user._id?.slice(0, 20)}...
          </span>
        </span>
      </div>
      <div className="sidenav_list">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "inherit" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <ListItemIcon>
              <GridViewIcon className="sidenav_icons" />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={ListItemStyle} primary="Dashboard" />
          </ListItemButton>
          <div className={`${open ? "list_expand_wrapper" : ""}`}>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <KeyIcon className="sidenav_icons" />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={ListItemStyle} primary="E3 Apps" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto">
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AcUnitIcon className="sidenav_icons" />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={ListItemStyle} primary="Peak Shaving & Alert" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <HeatPumpIcon className="sidenav_icons" />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={ListItemStyle} primary="Ventilation" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <LightbulbCircleIcon className="sidenav_icons" />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={ListItemStyle} primary="Cooling" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <StadiumIcon className="sidenav_icons" />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={ListItemStyle} primary="Heat Pump" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <AccessTimeIcon className="sidenav_icons" />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={ListItemStyle} primary="Out of Hours" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <EvStationIcon className="sidenav_icons" />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={ListItemStyle} primary="Ev Charging" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <ElectricBoltIcon className="sidenav_icons" />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={ListItemStyle} primary="Load Shifting" />
                </ListItemButton>
              </List>
            </Collapse>
          </div>
          <div>
            <ListItemButton>
              <ListItemIcon>
                <CellTowerIcon className="sidenav_icons" />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={ListItemStyle} primary="Demand Response" />
              {false ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </div>
          <div>
            <ListItemButton>
              <ListItemIcon>
                <BarChartIcon className="sidenav_icons" />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={ListItemStyle} primary="Insights" />
              {false ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </div>
          <div>
            <ListItemButton>
              <ListItemIcon>
                <HistoryIcon className="sidenav_icons" />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={ListItemStyle} primary="Version History" />
              {false ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </div>
          <div className="logout_wrapper">
            <ListItemButton onClick={() => handleLogout()} >
              <ListItemIcon>
                <PowerSettingsNewIcon className="sidenav_icons" />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={ListItemStyle} primary="Logout" />
            </ListItemButton>
          </div>
        </List>
      </div>
    </div>
  );
};

export default Sidenav;
