/* eslint-disable jsx-a11y/anchor-is-valid */

import {  FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { LiaUserSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import "./Dashboard.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinChange = (event) => {
    const value = parseInt(event.target.value);
    if (value < maxValue) {
      setMinValue(value);
    }
  };



  const handleRangeChange = (event) => {
    const [min, max] = event.target.value.split(",").map(Number);
    setMinValue(min);
    setMaxValue(max);
  };

  return (
    <div>
      <div className="first-section">
        <div className="section">
          <div className="content">
            <div className="border">
              <div className="svggg">
                <p>
                  <IoLocationOutline />
                  New York
                </p>
                <p>
                  <FaArrowRightArrowLeft />
                </p>
                <p>
                  <IoLocationOutline />
                  MUMBAI CITY
                </p>
              </div>
            </div>
            <div className="border">
              <p>
                <SlCalender />
                29 July 2019{" "}
              </p>
            </div>
            <div className="border">
              <p>
                <LiaUserSolid />2 Traveller with{" "}
              </p>
            </div>
            <div className="border">
  <p>
    <a
      className={`link ${activeIndex === 0 ? "active" : ""}`}
      onClick={() => handleClick(0)}
    >
      <span>ROUND TRIP</span>
    </a>
  </p>
  <p>
    <a
      className={`link ${activeIndex === 1 ? "active" : ""}`}
      onClick={() => handleClick(1)}
    >
      <span>ROUND TRIP</span>
    </a>
  </p>
  <p>
    <a
      className={`link ${activeIndex === 2 ? "active" : ""}`}
      onClick={() => handleClick(2)}
    >
      <span>ROUND TRIP</span>
    </a>
  </p>
</div>


              <div className="border">  
              <p>
                <FaArrowRightArrowLeft />
                Multi city
              </p>
            </div>
            <div className="border">
              <p>Search </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-head">
          <h1>RESULT (25)</h1>
          <h5>FILTER</h5>
          <h5>
            TICKET OF CLASS <IoIosArrowDown />
          </h5>
        </div>

        <div className="content">
          <div className="second-section">
            <table>
              <thead>
                <tr>
                  <div className="second-section"></div>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="left-content" colSpan="2">
                    <img src="logo192.png" className="image" alt="Emirates" />
                    <p>Emirates</p>
                  </td>
                  <td className="left-content" colSpan="2">
                    JFK
                    <p>12:00pm</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    Thursday
                    <p>12:0pm</p>
                    <p>NON-STOP</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    $5,000
                    <p>
                      <button>Book Now</button>
                    </p>
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td className="left-content" colSpan="2">
                    <img src="logo192.png" className="image" alt="Emirates" />
                    <p>Emirates</p>
                  </td>
                  <td className="left-content" colSpan="2">
                    JFK
                    <p>12:00pm</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    Thursday
                    <p>12:0pm</p>
                    <p>NON-STOP</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    $5,000
                    <p>
                      <button>Book Now</button>
                    </p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="left-content" colSpan="2">
                    <img src="logo192.png" className="image" alt="Emirates" />
                    <p>Emirates</p>
                  </td>
                  <td className="left-content" colSpan="2">
                    JFK
                    <p>12:00pm</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    Thursday
                    <p>12:0pm</p>
                    <p>NON-STOP</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    $5,000
                    <p>
                      <button>Book Now</button>
                    </p>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td className="left-content" colSpan="2">
                    <img src="logo192.png" className="image" alt="Emirates" />
                    <p>Emirates</p>
                  </td>
                  <td className="left-content" colSpan="2">
                    JFK
                    <p>12:00pm</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    Thursday
                    <p>12:0pm</p>
                    <p>NON-STOP</p>
                  </td>
                  <td className="right-content" colSpan="3">
                    $5,000
                    <p>
                      <button>Book Now</button>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <table className="tablee">
            <div className="flexx">
              <p>FROM</p>

              <p>TO</p>
            </div>
            <div className="flex">
              <p>JFK</p>
              <p>NON STOP</p>
              <p>BOM</p>
            </div>

            <img src="world-map.png" className="world-map" alt="world-map" />
            <div className="flexs">
              <p>NON STOP</p>
              <p>ONE STOP</p>
              <p>NON STOP</p>
            </div>
            <div class="links"></div>

            <div className="range-slider">
              <p>Price</p>
              <input
                type="range"   
                min="0"
                max="100"
                value={`${minValue},${maxValue}`}
                onChange={handleRangeChange}
              />
              <div className="input-container">
                <label>Min&Max:</label>
                <input
                  type="number"
                  value={minValue}
                  onChange={handleMinChange}
                />
              </div>
            </div>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
