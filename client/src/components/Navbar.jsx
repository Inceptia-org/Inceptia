import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import '../components/Navbar.css'
// import React from 'react';
import { SignedIn, SignedOut, SignInButton, SignInWithMetamaskButton, UserButton, useUser } from '@clerk/clerk-react';

function Navbar() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    // Set active tab based on current location
    const path = window.location.pathname.split("/").pop();
    const target = $(`#navbarSupportedContent ul li a[href="${path}"]`);
    setActiveTab(target.parent().index());
  }, []);

  useEffect(() => {
    // Initialize responsive navbar animation
    function test() {
      const tabsNewAnim = $("#navbarSupportedContent");
      const selectorNewAnim = tabsNewAnim.find("li").length;
      const activeItemNewAnim = tabsNewAnim.find(".active");
      if (!activeItemNewAnim.length) return; // Return if active item is not found
      const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      const itemPosNewAnimTop = activeItemNewAnim.position();
      const itemPosNewAnimLeft = activeItemNewAnim.position();
      $(".hori-selector").css({
        top: `${itemPosNewAnimTop?.top}px`, // Add the safe navigation operator to check for undefined values
        left: `${itemPosNewAnimLeft?.left}px`, // Add the safe navigation operator to check for undefined values
        height: `${activeWidthNewAnimHeight}px`,
        width: `${activeWidthNewAnimWidth}px`,
      });
      $("#navbarSupportedContent").on("click", "li", function (e) {
        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass("active");
        const activeWidthNewAnimHeight = $(this).innerHeight();
        const activeWidthNewAnimWidth = $(this).innerWidth();
        const itemPosNewAnimTop = $(this).position();
        const itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
          top: `${itemPosNewAnimTop?.top}px`, // Add the safe navigation operator to check for undefined values
          left: `${itemPosNewAnimLeft?.left}px`, // Add the safe navigation operator to check for undefined values
          height: `${activeWidthNewAnimHeight}px`,
          width: `${activeWidthNewAnimWidth}px`,
        });
      });
    }
  
    setTimeout(() => {
      test();
    });
  
    $(window).on("resize", function () {
      setTimeout(() => {
        test();
      }, 500);
    });
  
    $(".navbar-toggler").click(function () {
      $(".navbar-collapse").slideToggle(300);
      setTimeout(() => {
        test();
      });
    });
  }, []);
  

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      {/* <a className="navbar-brand navbar-logo" href="#">
        Navbar
      </a> */}
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className={`nav-item ${activeTab === 0 ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/"
              onClick={() => handleTabClick(0)}
            >
              <i className="fas fa-tachometer-alt"></i>Home
            </Link>
          </li>


          <li className={`nav-item ${activeTab === 1 ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/profile"
              onClick={() =>
                handleTabClick(1)
            }
            >
              <i className="far fa-user"></i>Profile
            </Link>
          </li>




          <li className={`nav-item ${activeTab === 2 ? "active" : ""}`}>
            <Link
              className="nav-link"
              to="/marketplace"
              onClick={() => handleTabClick(2)}
            >
              <i className="fas fa-cog"></i>Marketplace
            </Link>
          </li>




          <li className="nav-item b">
            <Link className="nav-link"
             to="/claimNFT"
             >
              <i className="far fa-envelope"></i>ClaimNFT
            </Link>
          </li>




          <div className="text-container1">
  <SignedIn className="signed-in">
    {user && (
      <div className="flex-container">
        <div className="address">{user.web3Wallets[0].web3Wallet.substring(0, 8)}</div>
        <div className="user-account">{/* Add user account content here */}</div>
      </div>
    )}
    <UserButton afterSignOutUrl={window.location.href} />
  </SignedIn>
  <SignedOut>
    <SignInButton mode='modal' />
    {/* <SignInWithMetamaskButton mode='popup' /> */}
  </SignedOut>
</div>




  
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;






