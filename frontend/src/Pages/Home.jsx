import React, { useState, useEffect } from "react";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";

const Home = () => {
	return (
		<div>
			<Hero />
			<Gallery />
		</div>
	);
};

export default Home;
