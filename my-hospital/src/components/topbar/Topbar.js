import { Link } from "react-router-dom";
import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">myHospital</span>
        </div>
        <div className="topRight">
        <div className="topbarIconContainer">
            <input type="text" placeholder="Search Patient data" className="searchBar"></input>
          </div>
          <div className="topbarIconContainer">
            <Link to="/Login">Login</Link>
          </div>
          <div className="topbarIconContainer">
            <button>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}