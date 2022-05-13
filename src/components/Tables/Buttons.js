import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../../routes/Home";

export function HomeButton() {
  return (
    <NavLink to="/">
      <button type="button" className="btn">
        Back to Home page
      </button>
    </NavLink>
  );
}

export function StocksButton() {
  return (
    <NavLink to="/Stock">
      <button type="button" className="btn">
        Back to Stocks page
      </button>
    </NavLink>
  );
}
