import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
      <Register />
      <Footer />
    </Router>
  );
}

export default App;
