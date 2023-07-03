import Hero from "../components/Hero";
import ProductGallery from "../components/ProductGallery";
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
