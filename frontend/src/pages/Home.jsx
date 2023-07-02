import ProductGallery from "../components/ProductGallery";
// import Hero from "../components/Hero";
import React, { useState, useEffect } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);

  const URL = "http://localhost:9000/products";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setProducts(data.data);
      });
  }, []);

  console.log(products);

  return (
    <div>
      <ProductGallery products={products}/>
    </div>
  );
};

export default Home;
