import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import WishList from "./pages/WishList";
import Modal from "./components/Modal";
import { ClerkProvider } from "@clerk/clerk-react";
import LogIn from "./pages/ClerkSignIn";
import Register from "./pages/ClerkSignUp";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <CurrentUserProvider>
        {showModal && <Modal closeModal={closeModal} />}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/user" element={<User />} />
            <Route path="/user/login" element={<LogIn />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/products/mens" element={<Mens />} />
            <Route path="/products/womens" element={<Womens />} />
            <Route path="/products/all" element={<AllProducts />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/user/wishlist" element={<WishList />} />
          </Routes>
          <div className="divider w-11/12 m-auto"></div>
          <Footer />
        </Router>
      </CurrentUserProvider>
    </ClerkProvider>
  );
}

export default App;
