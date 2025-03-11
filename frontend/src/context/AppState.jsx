import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import { Bounce, ToastContainer, toast } from 'react-toastify';

const AppState = (props) => {
  const url = "http://localhost:5000/api";
  const [products, setProducts] = useState([]);
  useState;
  useEffect(() => {
    const fetchProducts = async () => {
      const api = await axios.get(`${url}/product/allProduct`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });

      setProducts(api.data.product);
    };
    fetchProducts();
  }, []);
  const register = async (name, email, password) => {
    const api = await axios.post(
      `${url}/user/register`,
      { name, email, password },
      {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      }
    );
    toast.success(api.data.message, {
        position: "top-right",
        autoClose: 1499,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    return api.data
    
  };
  return (
    <AppContext.Provider value={{ products, register }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
