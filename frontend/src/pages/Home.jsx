import Hero from "../components/Hero";
import ProductGallery from "../components/Gallery";
import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductGallery />
    </div>
  );
};

export default Home;
