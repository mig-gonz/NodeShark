import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./Pages/User";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import ViewAll from "./Pages/ViewAll";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/viewall" element={<ViewAll />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
