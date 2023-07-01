import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";
import NavBar2 from "./components/NavBar2";

function App() {
  return (
    <Router>
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:product_id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
