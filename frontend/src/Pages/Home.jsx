import React from "react";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import BotHero from "../components/botHero";

const Home = () => {
	return (
		<div>
			<Hero />
			<Gallery />
			<BotHero />
		</div>
	);
};

export default Home;
