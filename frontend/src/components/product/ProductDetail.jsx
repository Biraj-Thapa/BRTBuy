import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import RelatedProduct from "./RelatedProduct";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const url = "http://localhost:5000/api";

  useEffect(() => {
    const fetchProducts = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      setProduct(api.data.product);
    };
    fetchProducts();
  }, [id]);
  return (

    <div>
      <div className="container text-center my-5" style={{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center"
      }}>
        <div className="left">
            <img src={product?.imgSrc} alt=""  style={{width:"250px",height:"250px",borderRadius:"10px", border:"2px solid yellow"}} />
        </div>
        <div className="right">
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <h1>{product?.price} {"₹"}</h1>
            <h3>{product?.category}</h3>
            <div className="my-5">
                <button className="btn btn-danger mx-3" style={{fontWeight:"bold"}}>Buy Now</button>
                <button className="btn btn-warning" style={{fontWeight:"bold"}}>Add to Cart</button>
            </div>
        </div>
      </div>
      <RelatedProduct category={product?.category}/>
    </div>
  );
};

export default ProductDetail;
