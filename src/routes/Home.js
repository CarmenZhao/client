import React from "react";
import HomeCard from "../components/Cards/HomeCard";

export default function Home() {
  return (
    <div className="homeDiv">
      <div className="row d-flex-column heading">
        <div className=" col-10 ">
          <p style={{ marginTop: 10, fontSize: 30 }}>
            Welcome to the Stock Genius Portal.
          </p>
          <p>
            You may click on Stocks or Get Started to view all the available
            companies. You can get the most recent 100 days of price information
            for a particular stock.
          </p>
        </div>
        <a href="/Stock">
          <button type="button" className="btn">
            Get Started
          </button>
        </a>
      </div>
      <div className="row hero"></div>
      <div className="row">
        <p id="feature">We provide expert features for your stock analysis.</p>
      </div>
      <HomeCard />
    </div>
  );
}
