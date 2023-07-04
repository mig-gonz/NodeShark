import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import ViewAll from "./pages/ViewAll";
import Footer from "./components/Footer";
import Women from "./components/Women";
import Men from "./components/Men";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/viewall" element={<ViewAll />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
