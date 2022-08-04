import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header_icon"
            src="https://api2.iloveimg.com/v1/download/pg9hnc72ggkxxdfqA4jA6l1mhdzhr7xfh2vjxq647g5rb367wdsvvx76wphhjrfyh3xbvm6pll0k25l16kb5rtxtgv70djywjk3wggclrw03ch16z51jfqv0y1qxl6rdcsy4d3A9pd8z605A3k88zjpblb91tvrm29dAAw4xrtw0sh6p9pgq"
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
