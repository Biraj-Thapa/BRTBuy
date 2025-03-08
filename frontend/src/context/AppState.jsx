import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import axios from "axios"

const AppState = (props) => {
    const url="http://localhost:5000/api"
    const [products,setProducts]=useState([])
    useState
    useEffect(()=>{
        const fetchProducts=async ()=>{
            const api = await axios.get(`${url}/product/allProduct`,{
                headers:{
                    "Content-Type":"Application/json"
                },
                withCredentials:true
            })
            console.log(api.data.product)
            setProducts(api.data.product)
        }
        fetchProducts()

    },[])
  const data = 10;
  return (
    <AppContext.Provider value={{ products }}>{props.children}</AppContext.Provider>
  ); 
};

export default AppState;
