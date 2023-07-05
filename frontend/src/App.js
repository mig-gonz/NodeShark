import User from "./Pages/User";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import NavBar2 from "./components/NavBar2";
import ProductDetail from "./components/ProductDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
