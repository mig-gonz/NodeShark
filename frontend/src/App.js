import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrentUserProvider from "./contexts/CurrentUser";
import Home from "./pages/Home";
import User from "./pages/User";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import AllProducts from "./pages/AllProducts";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CategoryPage from "./pages/CategoryPage";
import Login from "./components/Login";
import Register from "./components/Register";
import WishList from "./pages/WishList";

function App() {
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
          <Route path="/user/wishlist" element={<WishList />} />
        </Routes>
        <Footer />
      </Router>
    </CurrentUserProvider>
  );
}

export default App;
