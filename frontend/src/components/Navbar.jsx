import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="nav sticky-top">
        <div className="nav_bar ">
          <Link
            to={"/"}
            className="left"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h3>BRTBuy</h3>
          </Link>
          <div className="search_bar">
            <span className="material-symbols-outlined">search</span>
            <input type="text"  placeholder="Search Product Here"/>
          </div>
          <div className="right">
            <div className="btn btn-warning mx-3">cart</div>
            <div className="btn btn-warning mx-3">profile</div>
            <div className="btn btn-warning mx-3">login</div>
            <div className="btn btn-warning mx-3">register</div>
            <div className="btn btn-warning mx-3">logout</div>
          </div>
        </div>
        <div className="sub_bar"></div>
      </div>
    </>
  );
};

export default Navbar;
