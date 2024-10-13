import React, { useState, useEffect } from "react";
import ItemCard from "./ProductsCard";


const Products = () => {
  const [filter, setFilter] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, []);

  // Filtering logic based on selected filter
  const filteredProducts = products.filter((product) => {
    if (filter === "All") return true;
    return product.category.toLowerCase() === filter.toLowerCase();
  });

  return (
    <>
      <ProductsFilter setFilter={setFilter} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : filteredProducts.length > 0 ? (
        <ItemCard Items={filteredProducts} />
      ) : (
        <p>No products found for the selected category.</p>
      )}
    </>
  );
};

export const ProductsFilter = ({ setFilter }) => {
  return (
    <>
      <div className="d-flex gap-2 justify-content-center mt-5">
        <button
          className="btn btn-primary ms-2"
          type="button"
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className="btn btn-primary ms-2"
          type="button"
          onClick={() => setFilter("men's clothing")}
        >
          Men's Category
        </button>
        <button
          className="btn btn-primary ms-2"
          type="button"
          onClick={() => setFilter("women's clothing")}
        >
          Women's Category
        </button>
        <button
          className="btn btn-primary ms-2"
          type="button"
          onClick={() => setFilter("jewelery")}
        >
          Jewelry
        </button>
        <button
          className="btn btn-primary ms-2"
          type="button"
          onClick={() => setFilter("electronics")}
        >
          Electronics
        </button>
      </div>
    </>
  );
};

export default Products;
