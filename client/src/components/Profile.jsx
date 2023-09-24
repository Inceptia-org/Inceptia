import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function Profile() {

  const [mintedTokenURI, setMintedTokenURI] = useState(null);

useEffect(() => {
  // Retrieve the minted NFT URI from localStorage when the component mounts
  const storedMintedTokenURI = localStorage.getItem('mintedTokenURI');
  if (storedMintedTokenURI) {
    setMintedTokenURI(storedMintedTokenURI);
  }
}, []);

  return (
    <>
    <Navbar/>
    <div
      className="mt-8"
      style={{ backgroundColor: "#1a1c1f", color: "white" }}
    >
      <div className="container mx-auto">
        <div className="main-body">
          {/* Breadcrumb */}

          {/* /Breadcrumb */}
          <div
            className="mt-0"
            style={{ backgroundColor: "#1a1c1f", color: "white" }}
          >
            <div
              className="flex flex-col md:flex-row   md:space-x-6"
              style={{ backgroundColor: "#1a1c1f", color: "white" }}
            >
              <div className="md:w-1/3">
                <div
                  className="bg-white rounded-lg shadow-md mb-3"
                  style={{ backgroundColor: "#24262b", color: "white" }}
                >
                  <div className="flex flex-col items-center justify-center p-6">
                  {mintedTokenURI && (
                    <img
                    src={mintedTokenURI} alt="Updated NFT"
                      className="mb-3 w-1/2"
                    />
                    )}

                    <div className="text-center">
                      <h5 className="text-xl font-medium">Username</h5>
                      <h4 className="text-xl font-medium">Level</h4>

                      <input
                        type="range"
                        min="0"
                        max="100"
                        value="25"
                        className="range"
                        step="25"
                      />
                      <div className="w-full flex justify-between text-xs px-2">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                      </div>
<Link  to="/updateNFT">
                      <button
                        className="bg-blue-500 text-white rounded-full px-4 py-2 mt-3 mr-3 hover:bg-blue-600"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(50,168,56,1) 0%, rgba(50,168,56,1) 50%, rgba(87,194,33,1) 50%, rgba(87,194,33,1) 100%)",
                        }}
                      >
                        Get Upgrade
                      </button>
              </Link>

              <Link  to="/marketplace">
                      <button
                        className="bg-white text-white-500 border border-green-500 rounded-full px-4 py-2 mt-3 hover:bg-green-50"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(50,168,56,1) 0%, rgba(50,168,56,1) 50%, rgba(87,194,33,1) 50%, rgba(87,194,33,1) 100%)",
                        }}
                      >
                        Sell Account
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white rounded-lg shadow-md mb-3"
                  style={{ backgroundColor: "#24262b", color: "white" }}
                >
                  <div className="p-6">
                    <h5 className="mb-3 font-medium">Games Played</h5>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2" style={{ listStyleType: "none" }}>
                        <span
                          className="mr-2"
                          style={{
                            display: "inline-block",
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            background:
                              "url('https://o.remove.bg/downloads/722619c3-ea76-40ea-9062-fc0fa24f680c/attachment_130083113-removebg-preview.png') center / contain no-repeat",
                          }}
                        ></span>
                        Grand Theft Auto
                      </li>
                      <li className="mb-2" style={{ listStyleType: "none" }}>
                        <span
                          className="mr-2"
                          style={{
                            display: "inline-block",
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            background:
                              "url('https://o.remove.bg/downloads/722619c3-ea76-40ea-9062-fc0fa24f680c/attachment_130083113-removebg-preview.png') center / contain no-repeat",
                          }}
                        ></span>
                        Minecraft
                      </li>
                      <li className="mb-2" style={{ listStyleType: "none" }}>
                        <span
                          className="mr-2"
                          style={{
                            display: "inline-block",
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            background:
                              "url('https://o.remove.bg/downloads/722619c3-ea76-40ea-9062-fc0fa24f680c/attachment_130083113-removebg-preview.png') center / contain no-repeat",
                          }}
                        ></span>
                        call od Duty
                      </li>
                      <li className="mb-2" style={{ listStyleType: "none" }}>
                        <span
                          className="mr-2"
                          style={{
                            display: "inline-block",
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            background:
                              "url('https://o.remove.bg/downloads/722619c3-ea76-40ea-9062-fc0fa24f680c/attachment_130083113-removebg-preview.png') center / contain no-repeat",
                          }}
                        ></span>
                        IGI
                      </li>
                      <li className="mb-2" style={{ listStyleType: "none" }}>
                        <span
                          className="mr-2"
                          style={{
                            display: "inline-block",
                            width: "1.5rem",
                            height: "1.5rem",
                            borderRadius: "50%",
                            background:
                              "url('https://o.remove.bg/downloads/722619c3-ea76-40ea-9062-fc0fa24f680c/attachment_130083113-removebg-preview.png') center / contain no-repeat",
                          }}
                        ></span>
                        Counter Strike 2
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <div
                  className="bg-white rounded-lg shadow-md p-6 mb-3"
                  style={{ backgroundColor: "#24262b", color: "white" }}
                >
                  <h5
                    className="text-lg font-medium mb-4"
                    style={{ backgroundColor: "#24262b", color: "white" }}
                  >
                    Personal Statistics & Information
                  </h5>
                  <div className="flex flex-col">
                    <h6
                      className="text-lg font-medium mb-4"
                      style={{ backgroundColor: "#24262b", color: "white" }}
                    >
                      Booster Time Left
                    </h6>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-4 mb-4">
                      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                      </div>
                      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                      </div>
                      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                      </div>
                      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                          <span style={{ "--value": 38 }}></span>
                        </span>
                        sec
                      </div>
                    </div>
                    <div className="stats shadow">
                      <div className="stat place-items-center">
                        <div className="stat-title">Coins</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">
                          From January 1st to February 1st
                        </div>
                      </div>

                      <div className="stat place-items-center">
                        <div className="stat-title">Last 7 Days coins</div>
                        <div className="stat-value text-green-500">4,200</div>
                        <div className="stat-desc text-green-500">
                          ↗︎ 40 (2%)
                        </div>
                      </div>

                      <div className="stat place-items-center">
                        <div className="stat-title">Loss Coins</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-white rounded-lg shadow-md p-6"
                  style={{ backgroundColor: "#24262b", color: "white" }}
                >
                  <h5 className="text-lg font-medium mb-4">
                    Games Progress and Levels
                  </h5>
                  <div className="flex flex-wrap">
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 1
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-blue-500"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 2
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-green-500"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 3
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-yellow-500"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 4
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-purple-500"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 4
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-red-500"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <span className="inline-block w-1/5 font-semibold text-gray-400">
                        Game 6
                      </span>
                      <div className="inline-block w-3/5 h-3 ml-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-teal-500"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Profile;
