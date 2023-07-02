import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import User from "./pages/User";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
	return (
		<div className="">
			<Router>
				<Routes>
					<Route
						path="/user"
						element={<User />}
					/>
					<Route
						path="/"
						element={<Homepage />}
					/>
					<Route
						path="/user/login"
						element={<Login />}
					/>
					<Route
						path="/user/register"
						element={<Register />}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
