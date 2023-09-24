import React, { useState, useEffect } from "react";
import "./Games.css";
import Hh from "./Hh";
import { Link } from "react-router-dom";

const Games = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Hh />
      <div className="main">
        <div className="hero mb-0" style={{ backgroundColor: "#1a1c1f" }}>
          <div
            className={`hero-content flex-col lg:flex-row transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="https://theninehertz.com/wp-content/uploads/2022/08/Bored-Ape-Yacht-Club-2087.png"
              className="max-w-md rounded-lg shadow-2xl mr-8"
              width="500"
              height="700"
            />
            <div className="mt-20">
              <h5 className="text-3xl font-bold">A New Home for Game Lovers</h5>
              <div>
                <ul className="steps steps-vertical">
                  <li
                    className="step-base-content"
                    style={{ color: "#57c221" }}
                  >
                    Ludo is a board game played with 2-4 players.
                  </li>
                  <li
                    className="step-base-content"
                    style={{ color: "#57c221" }}
                  >
                    Players race their four tokens from start.
                  </li>
                  <li
                    className="step-base-content"
                    style={{ color: "#57c221" }}
                  >
                    Tokens must make a full circuit of the board to reach the
                    finish line.
                  </li>
                  <li
                    className="step-base-content"
                    style={{ color: "#57c221" }}
                  >
                    First player to get all their tokens to the finish line
                    wins.
                  </li>
                  <li
                    className="step-base-content"
                    style={{ color: "#57c221" }}
                  >
                    Ludo is a simple yet entertaining game for all ages.
                  </li>
                  <button
                    className="btn w-32"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(50,168,56,1) 0%, rgba(50,168,56,1) 50%, rgba(87,194,33,1) 50%, rgba(87,194,33,1) 100%)",
                      color: "#fff",
                    }}
                  >
                    <Link to= "/memorygame">
                    Play Now1
                    </Link>
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="hero" style={{ backgroundColor: "#1a1c1f" }}>
          <div
            className={`hero-content flex-col lg:flex-row-reverse transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="https://wallpapercave.com/wp/wp10537308.jpg"
              className="max-w-md rounded-lg shadow-2xl mr-8"
              width="500"
              height="500"
            />
            <div>
              <h1 className="text-3xl font-bold">Box Office News!</h1>
              <ul className="steps steps-vertical">
                <li
                  className="step step-base-content"
                  style={{ color: "#57c221" }}
                >
                  Ludo is a board game played with 2-4 players.
                </li>
                <li
                  className="step step-base-content"
                  style={{ color: "#57c221" }}
                >
                  Players race their four tokens from start.
                </li>
                <li
                  className="step step-base-content"
                  style={{ color: "#57c221" }}
                >
                  Tokens must make a full circuit of the board to reach the
                  finish line.
                </li>
                <li
                  className="step step-base-content"
                  style={{ color: "#57c221" }}
                >
                  First player to get all their tokens to the finish line wins.
                </li>
                <li
                  className="step step-base-content"
                  style={{ color: "#57c221" }}
                >
                  Ludo is a simple yet entertaining game for all ages.
                </li>
                <button
                  className="btn w-32"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(50,168,56,1) 0%, rgba(50,168,56,1) 50%, rgba(87,194,33,1) 50%, rgba(87,194,33,1) 100%)",
                    color: "#fff",
                  }}
                >
                  Play Now
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="" style={{ backgroundColor: "#1a1c1f" }}>
          <div className="hero" style={{ backgroundColor: "#1a1c1f" }}>
            <div
              className={`hero-content flex-col lg:flex-row transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://i.pinimg.com/736x/dd/f4/4e/ddf44e5f86dbbc840e7ced72e0fcf840.jpg"
                className="max-w-md rounded-lg shadow-2xl mr-8"
                width="500"
                height="500"
              />

              <div className="mt-8">
                <h5 className="text-3xl font-bold">
                  A New Home for Game Lovers
                </h5>
                <div>
                  <ul className="steps steps-vertical">
                    <li
                      className="step step-neutral-content"
                      style={{ color: "#57c221" }}
                    >
                      Ludo is a board game played with 2-4 players.
                    </li>
                    <li
                      className="step step-base-content"
                      style={{ color: "#57c221" }}
                    >
                      Players race their four tokens from start.
                    </li>
                    <li
                      className="step step-base-content"
                      style={{ color: "#57c221" }}
                    >
                      Tokens must make a full circuit of the board to reach the
                      finish line.
                    </li>
                    <li
                      className="step step-base-content"
                      style={{ color: "#57c221" }}
                    >
                      First player to get all their tokens to the finish line
                      wins.
                    </li>
                    <li
                      className="step step-base-content"
                      style={{ color: "#57c221" }}
                    >
                      Ludo is a simple yet entertaining game for all ages.
                    </li>
                    <button
                      className="btn w-32"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(50,168,56,1) 0%, rgba(50,168,56,1) 50%, rgba(87,194,33,1) 50%, rgba(87,194,33,1) 100%)",
                        color: "#fff",
                      }}
                    >
                      Play Now
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
