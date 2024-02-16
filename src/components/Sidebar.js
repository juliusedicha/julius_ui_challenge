 import React from 'react';

import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import profileImagee from "./profile-image.jpg";
import profileImage from "./profile-image.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-content">
        <div className="profile">
          <img src="profile-image.jpg" alt="EDICHA JULIUS" />
          <span className="profile-name">EDICHA JULIUS</span>
          <span className="profile-email">juliusedicha@gmail.com</span>
        </div>
      </div>
      <div className="bottom-content">
        <ul>
          <li className="sidebar-item">
            <NavLink to="/dashboard" activeClassName="active">
              <i className="material-icons">home</i>
              <span className="text">DASHBOARD</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/flight" activeClassName="active">
              <i className="material-icons">code</i>
              <span className="text">FLIGHT</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/wallet" activeClassName="active">
              <i className="material-icons">folder</i>
              <span className="text">WALLET</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/report" activeClassName="active">
              <i className="material-icons">email</i>
              <span className="text">REPORT</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/statistic" activeClassName="active">
              <i className="material-icons">email</i>
              <span className="text">STATISTIC</span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/setting" activeClassName="active">
              <i className="material-icons">email</i>
              <span className="text">SETTING</span>
            </NavLink>
          </li>
        </ul>
        <div className="active-users">
          <h5>ACTIVE USERS</h5>
          <div className="user-images">
            <img src={profileImagee} alt="User 1" className="user-image1" />
            <img src={profileImage} alt="User 3" className="user-image2" />
            <img src={profileImage} alt="User 4" className="user-image3" />
            <img src={profileImage} alt="User 5" className="user-image4" />
            <div className="user-count-wrapper">
              <p className="user-count">76+</p>
            </div>
          </div>
        </div>
      </div>

      <img src="world-map.png" alt="Globe" className="globe-image" />
    </div>
  );
}

export default Sidebar;
