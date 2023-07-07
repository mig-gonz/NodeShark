import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Details from "./Components/Details";
import Mens from "./Components/Mens";
import Womens from "./Components/Womens";
import AllProducts from "./Components/AllProducts";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import CategoryPage from "./Pages/CategoryPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { CurrentUserProvider } from "./contexts/CurrentUser";
import HomePage from "./components";

function App() {
  // keep lower case page and components dir
  return (
    <CurrentUserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<HomePage />} />
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
