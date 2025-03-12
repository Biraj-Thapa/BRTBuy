import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { setFilteredData, products } = useContext(AppContext);

  const filterbyCategory = (cat) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() == cat.toLowerCase()
      )
    );
  };
  const filterbyPrice = (price) => {
    setFilteredData(products.filter((data) => data.price >= price));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("");
  };
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
          <form className="search_bar" onSubmit={submitHandler}>
            <span className="material-symbols-outlined">search</span>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Product Here"
            />
          </form>
          <div className="right">
            <div className="btn btn-warning mx-3">cart</div>
            <div className="btn btn-warning mx-3">profile</div>
            <Link to={"/login"} className="btn btn-info mx-3">
              login
            </Link>
            <Link to={"/register"} className="btn btn-info mx-3">
              register
            </Link>
            <div className="btn btn-warning mx-3">logout</div>
          </div>
        </div>
        {location.pathname == "/" && (
          <div className="sub_bar">
            <div className="items" onClick={() => setFilteredData(products)}>
              No Filter
            </div>
            <div className="items" onClick={() => filterbyCategory("mobile")}>
              Mobiles
            </div>
            <div className="items" onClick={() => filterbyCategory("laptop")}>
              Laptops
            </div>
            <div className="items" onClick={() => filterbyCategory("cameras")}>
              Camera's
            </div>
            <div
              className="items"
              onClick={() => filterbyCategory("headphones")}
            >
              Hedphones
            </div>
            <div className="items" onClick={() => filterbyPrice(15999)}>
              15999
            </div>
            <div className="items" onClick={() => filterbyPrice(25999)}>
              25999
            </div>
            <div className="items" onClick={() => filterbyPrice(49999)}>
              49999
            </div>
            <div className="items" onClick={() => filterbyPrice(69999)}>
              69999
            </div>
            <div className="items" onClick={() => filterbyPrice(89999)}>
              89999
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
