import React, { useContext } from "react";
import AppContext from "./context/AppContext";
import ShowProduct from "./components/product/ShowProduct";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import ProductDetail from "./components/product/ProductDetail";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ShowProduct />}/>
          <Route path="/product/:id" element={<ProductDetail/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
