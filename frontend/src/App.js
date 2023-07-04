import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import AllProducts from "./components/AllProducts";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/products/:id"
					element={<Details />}
				/>
				<Route
					path="/user"
					element={<User />}
				/>
				<Route
					path="/products/mens"
					element={<Mens />}
				/>
				<Route
					path="/products/womens"
					element={<Womens />}
				/>
				<Route
					path="/products/all"
					element={<AllProducts />}
				/>
				<Route
					path="/about-us"
					element={<AboutUs />}
				/>
				<Route
					path="/contact-us"
					element={<ContactUs />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
