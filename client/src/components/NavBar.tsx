import React, { Component } from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { BsCoin } from 'react-icons/bs'
import { GiAirplaneDeparture } from 'react-icons/gi'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class NavBar extends Component {
  render() {
    return (
      <nav
        className="nav fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col bg-gray-900 text-white shadow-lg
        "
      >
        <Link to = "/">
            <SideBarIcon icon={<BsCoin size="28" />}  text = {"About"}/>
        </Link>
        <Divider />
        <Link to = "/moon">
            <SideBarIcon icon={<GiAirplaneDeparture size="32"/>} text = {"Fly too Moon"}/>
        </Link>
        <Link to = "/double">
            <SideBarIcon icon={<BsFillLightningFill size="20" />} text = {"Double game"}/>
        </Link>
        <Link to = "/feed">
            <SideBarIcon icon={<FaPoo size="20" />}  text = {"Feed"}/>
        </Link>
        <Divider />
        <Link to = "/settings">
            <SideBarIcon icon={<BsGearFill size="22" />} text = "settings"/>
        </Link>
      </nav>
    );
  }
}

const Divider = () => <hr className = "sidebar-hr"/>

const SideBarIcon = ({icon, text = 'tooltip 💡'}) => (
    <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);