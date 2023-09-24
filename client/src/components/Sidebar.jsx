import React, { useState } from "react";
import "../components/Sidebar.css";
import bg from "../bg.png";
import { BiSearch, BiMenu, BiArrowBack } from "boxicons";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Slider from "./Slider";
import Leaderboard from "./Leaderboard";
import Techs from "./Techs";
import Games from "./Games";
import Chatbot from "./Chatbot";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearchBoxClick = () => {
    setIsSidebarOpen(false);
  };

  const handleModeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <nav className={isSidebarOpen ? "sidebar" : "sidebar close"}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={bg} alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">Inceptia</span>
              <span className="profession">Play to Earn</span>
            </div>
          </div>

          <i
            className={
              isSidebarOpen
                ? "bx bx-chevron-right toggle"
                : "bx bx-chevron-left toggle"
            }
            onClick={handleSidebarToggle}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box" onClick={handleSearchBoxClick}>
              {/* <BiSearch size={32} color="#ff0000" className="search-icon" /> */}

              <i className="bx bx-search icon "></i>
              <input className="search-place placeholder-white " type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Home</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Revenue</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-heart icon"></i>
                  <span className="text nav-text">Likes</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Wallets</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li className="mode" onClick={handleModeSwitch}>
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">
                {isDarkMode ? "Light mode" : "Dark mode"}
              </span>

              <div className="toggle-switch">
                <span
                  className="switch"
                ></span>
              </div>
            </li>
          </div>
        </div>
      </nav>

      <section class="home">
        <div class="textt">
          <Navbar />
        </div>
        <Hero />
        <Slider />
    
      
        <Games />
        <Leaderboard />
        <Chatbot/>
      </section>
    </>
  );
}

export default Sidebar;
