import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid gap-6 lg:grid-cols-2">
      <div>
        <h1 className="w-full text-3xl font-bold">NodeShark</h1>
        <p className="py-5">
          Shop your favorite styles all in one place, we offer the best from all
          of the tops brands in the industry for your workout!
        </p>
      </div>
      <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h6 className="font-medium border-b border-b-gray-700 p-2">
            Products
          </h6>
          <ul>
            <Link to="/products/mens">
              <li className="text-sm py-2 pl-1">Mens</li>
            </Link>
            <li className="text-sm py-2 pl-1">Womens</li>
            <li className="text-sm py-2 pl-1">All Products</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium border-b border-b-gray-700 p-2">Pages</h6>
          <ul>
            <li className="text-sm py-2 pl-1">About Us</li>
            <li className="text-sm py-2 pl-1">Source Code</li>
            <li className="text-sm py-2 pl-1">Contact Us</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium border-b border-b-gray-700 p-2">
            Account
          </h6>
          <ul>
            <li className="text-sm py-2 pl-1">Login</li>
            <li className="text-sm py-2 pl-1">Register</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium border-b border-b-gray-700 p-2">Help</h6>
          <ul>
            <li className="text-sm py-2 pl-1">FAQ</li>
            <li className="text-sm py-2 pl-1">Delivery Information</li>
            <li className="text-sm py-2 pl-1">Returns</li>
            <li className="text-sm py-2 pl-1">Orders</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
