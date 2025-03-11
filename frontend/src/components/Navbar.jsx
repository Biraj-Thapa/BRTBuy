import React, { useState } from "react";
import { Link,useNavigate } from "react-router";


const Navbar = () => {
  const [searchTerm,setSearchTerm]=useState("")
  const navigate=useNavigate()
  const submitHandler=(e)=>{
    e.preventDefault()
    navigate(`/product/search/${searchTerm}`)
    setSearchTerm("")

  }
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
            <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text"  placeholder="Search Product Here"/>
          </form>
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
