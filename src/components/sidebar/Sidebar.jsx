import React from "react";
import "./Sidebar.css";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineNoteAlt } from "react-icons/md";
import { CiSquareQuestion } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="all-sidebar-items">
          <div className="sidebar-content">
            <TbLayoutDashboard className="icon" />
            <p>Dashboard</p>
          </div>
          <div className="sidebar-content">
          <MdOutlineNoteAlt className="icon" />
          <p>Assessment</p>
          </div>
          <div className="sidebar-content">
          <CiSquareQuestion className="icon" />
          <p>My Library</p>
          </div>
          <div className="dash-line"></div>
          <div className="sidebar-content">
            <span>Admin</span>
            <FaLink className="faicon"/>
            <p className="round">Round
            Status</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
