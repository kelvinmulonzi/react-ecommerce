import React, { useState, useEffect, useContext } from "react";
import ItemCard from "./ProductsCard";

const Products = () => {
  const [filter, setFilter] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Get addToCart function from context

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);return (
    <>
     
      <ItemCard Items={products} />
   
    </>
  );}
  const setFilter = (category) => {
    setFilter(category);
  };

   
 
  export const ProductsFilter = () => {
    return (
      <>
        <div className="d-flex gap-2 justify-content-center mt-5">

          <button className="btn btn-primary ms-2" type="button"
          onClick={()=> setFilter()}>
            All
            
          </button>
          <button className="btn btn-primary ms-2" type="button"
          Onclick={()=> setFilter("men's clothing")}>
            Men's Category
          </button>
          <button className="btn btn-primary ms-2" type="button "
          Onclick={()=> setFilter("women's cllothing")}>
            Women's Category
          </button>
          <button className="btn btn-primary ms-2" type="button"
          Onclick={()=> setFilter("jewelery")}>
            Jewelery
          </button>
          <button className="btn btn-primary ms-2" type="button"
          Onclick={()=> setFilter("electronics")}>
            Electronics
          </button>
        </div>
      </>
    );
  };
 

  

export default Products;
