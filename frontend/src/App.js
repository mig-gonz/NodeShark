import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Footer from "./components/Footer";
import Navbar2 from "./components/NavBar2";
import ProductDetail from "./components/ProductDetail";

function App() {
	return (
		<Router>
			<Navbar2 />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/products/:id"
					element={<ProductDetail />}
				/>
				<Route
					path="/user"
					element={<User />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
