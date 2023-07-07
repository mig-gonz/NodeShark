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
import CategoryPage from "./pages/CategoryPage";
import Login from "./components/Login";
import Register from "./components/Register";
import { CurrentUserProvider } from "./contexts/CurrentUser";

function App() {
  // keep lower case page and components dir
  return (
    <CurrentUserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/products/mens" element={<Mens />} />
          <Route path="/products/womens" element={<Womens />} />
          <Route path="/products/all" element={<AllProducts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </Router>
    </CurrentUserProvider>
  );
}

export default App;
