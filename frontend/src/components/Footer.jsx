import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const categoryNames = [
    "Shirts",
    "Shorts",
    "Joggers & Sweats",
    "Tanks & Stringers",
    "Hoodies & Jackets",
    "Leggings",
    "Crop Tops",
    "Sport Bras",
  ];

  return (
    <div className="max-w-[1240px] mx-auto py-6 px-4 grid gap-6 lg:grid-cols-2">
      <div>
        <h1 className="w-full text-3xl font-bold main-title">NodeShark</h1>
        <p className="py-4">
          Shop your favorite styles all in one place, we offer the best from all
          of the tops brands in the industry for your workout!
        </p>
      </div>
      <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h6
            className="font-medium border-b border-b-gray-700 p-2"
            style={{ color: "#5920ed" }}
          >
            Products
          </h6>
          <ul>
            <Link to="/products/mens">
              <li className="text-sm py-2 pl-1">Mens</li>
            </Link>

            <Link to="/products/womens">
              <li className="text-sm py-2 pl-1">Womens</li>
            </Link>
            <Link to="/products/all">
              <li className="text-sm py-2 pl-1">All Products</li>
            </Link>
          </ul>
        </div>
        <div>
          <h6
            className="font-medium border-b border-b-gray-700 p-2"
            style={{ color: "#5920ed" }}
          >
            Categories
          </h6>
          <ul>
            {categoryNames.map((categoryName) => (
              <Link key={categoryName} to={`/category/${categoryName}`}>
                <li className="text-sm py-2 pl-1">{categoryName}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <h6
            className="font-medium border-b border-b-gray-700 p-2"
            style={{ color: "#5920ed" }}
          >
            Account
          </h6>
          <ul>
            <Link to="/user/login">
              <li className="text-sm py-2 pl-1">Login</li>
            </Link>
            <Link to="/user/register">
              <li className="text-sm py-2 pl-1">Register</li>
            </Link>
          </ul>
        </div>
        <div>
          <h6
            className="font-medium border-b border-b-gray-700 p-2"
            style={{ color: "#5920ed" }}
          >
            Pages
          </h6>
          <ul>
            <Link to={"/about-us"}>
              <li className="text-sm py-2 pl-1">About Us</li>
            </Link>
            <Link to={"/contact-us"}>
              <li className="text-sm py-2 pl-1">Contact Us</li>
            </Link>
            <Link to="https://github.com/mig-gonz/NodeShark" target="_blank">
              <li className="text-sm py-2 pl-1">Source Code</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
