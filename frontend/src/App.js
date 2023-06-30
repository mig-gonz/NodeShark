import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ProductDetail from "./components/ProductDetail";
import NavBar2 from "./components/NavBar2";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const URL = "http://localhost:5000/products";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  const handleProductClick = (product) => {
    console.log(product);
    setSelectedProduct(product);
  };

  return (
    <Router>
      <NavBar2 />
      <Routes>
        <Route
          path="/"
          element={
            <Home products={products} onProductClick={handleProductClick} />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetail product={selectedProduct} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
